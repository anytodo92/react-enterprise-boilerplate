import { Button } from '@mui/material';
import { GridRowModes, GridToolbarContainer } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';

type EditToolbarProps = {
  setRows: (arg: (arg: any) => void) => void;
  setRowModesModel: (arg: (arg: any) => void) => void;
};

export function getEditToolbar(newRow: any) {
  return function EditToolbar(props: EditToolbarProps) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const id = Date.now();
      setRows((oldRows: any) => {
        return [...oldRows, { ...newRow, id, isNew: true }];
      });
      setRowModesModel((oldModel: any) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'title' },
      }));
    };

    return (
      <GridToolbarContainer>
        <Button color='primary' startIcon={<AddIcon />} onClick={handleClick}>
          Add record
        </Button>
      </GridToolbarContainer>
    );
  };
}
