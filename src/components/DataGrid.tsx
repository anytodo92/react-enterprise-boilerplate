import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';
import { StyledDataGrid } from './StyledDataGrid';
import ConfirmationDialog from './Dialogs/ConfirmationDialog';

const dialogDetails = {
  title: 'Delete',
  content: 'Are you sure you want to delete this record?',
  buttonDisagree: 'Cancel',
  buttonAgree: 'Confirm',
  type: '',
};

type DataGridProps = {
  initialRows: any;
  columns: any;
  handleSaveRow: (arg: string) => void;
  handleDeleteRow: (arg: string) => void;
  dataGridProps: any;
};
export default function DataGrid({
  initialRows,
  columns,
  handleSaveRow,
  handleDeleteRow,
  dataGridProps,
}: DataGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedRowIds, setSelectedRowIds] = useState([]);

  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});
  const [selectedRow, setSelectedRow] = useState<any>({});
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);

  const handleDeleteDialogOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  useEffect(() => {
    setRows(initialRows);
  }, [initialRows]);

  const handleRowEditStart = (_: any, event: any) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (_: any, event: any) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id: string) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: string) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: string) => () => {
    const row = rows.find((row: any) => row.id === id);
    setSelectedRow(row);
    handleDeleteDialogOpen();
  };

  const handleDelete = () => {
    setRows(rows.filter((row: any) => row.id !== selectedRow.id));
    handleDeleteRow(selectedRow.id);
    handleDeleteDialogClose();
  };

  const handleCancelClick = (id: string) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row: any) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row: any) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: any) => {
    const updatedRow = { ...newRow };
    setRows(rows.map((row: any) => (row.id === newRow.id ? updatedRow : row)));
    handleSaveRow(updatedRow);
    return updatedRow;
  };

  const actions = {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 100,
    cellClassName: 'actions',

    getActions: ({ id }: any) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

      if (isInEditMode) {
        return [
          <GridActionsCellItem
            key='save'
            icon={<SaveIcon />}
            label='Save'
            onClick={handleSaveClick(id)}
            color='primary'
            showInMenu={false}
          />,
          <GridActionsCellItem
            key='cancel'
            icon={<CancelIcon />}
            label='Cancel'
            className='textPrimary'
            onClick={handleCancelClick(id)}
            color='inherit'
            showInMenu={false}
          />,
        ];
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return [
        <GridActionsCellItem
          key='edit'
          icon={<EditTwoToneIcon />}
          label='Edit'
          className='textPrimary'
          onClick={handleEditClick(id)}
          color='primary'
          showInMenu={false}
        />,
        <GridActionsCellItem
          key='delete'
          icon={<DeleteTwoToneIcon />}
          label='Delete'
          onClick={handleDeleteClick(id)}
          color='error'
          showInMenu={false}
        />,
      ];
    },
  };

  return (
    <Box
      sx={{
        minHeight: 520,
        height: '100%',
        position: 'relative',
        '& .MuiDataGrid-columnHeaders':
          selectedRowIds?.length > 0
            ? {
                backgroundColor: 'rgb(200, 250, 205)',
              }
            : {},
      }}
    >
      <StyledDataGrid
        {...dataGridProps}
        columns={[...columns, actions]}
        rows={rows}
        disableSelectionOnClick
        onSelectionModelChange={(ids) => setSelectedRowIds(ids)}
        page={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        editMode='row'
        rowModesModel={rowModesModel}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        getRowId={(row) => {
          if (row.isNew) setCurrentPage(Math.floor(rows.length / pageSize + 1));
          return row.id;
        }}
        experimentalFeatures={{ newEditingApi: true }}
        componentsProps={{
          toolbar: { setRows, setRowModesModel, setCurrentPage },
        }}
      />
      <ConfirmationDialog
        open={deleteDialogOpen}
        onAgree={handleDelete}
        onDisagree={handleDeleteDialogClose}
        details={dialogDetails}
        isLoading={false}
      />
    </Box>
  );
}
