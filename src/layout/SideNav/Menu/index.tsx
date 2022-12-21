// import { makeStyles } from '@mui/material';
import { useAppSelector } from '@/hooks/reduxHook';
import React from 'react';
import MenuItem from './MenuItem';
import { MenuDataType } from '@/layout/SideNav/menuData';

type MenuProps = {
  items: Array<MenuDataType>;
  isCollapseMenu: boolean;
};
const Menu = ({ items, isCollapseMenu }: MenuProps) => {
  const isStaff = useAppSelector((state) => state.auth.is_staff);

  return (
    <div
      style={{
        flex: 1,
        height: 0,
        padding: '1rem',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {items.map(
        (item) =>
          (item.userAccess || isStaff) && (
            <MenuItem
              key={item.id}
              title={item.title}
              icon={item.icon}
              text={item.text}
              shortText={item.shortText}
              url={item.url}
              submenu={item.submenu}
              isCollapseMenu={isCollapseMenu}
              history={undefined}
            />
          )
      )}
    </div>
  );
};

export default Menu;
