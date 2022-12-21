// Material UI
import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedIcon from '@mui/icons-material/Feed';
import React from 'react';

export interface MenuDataType {
  id: number;
  text: string;
  title: string;
  url: string;
  userAccess: boolean;
  shortText: string;
  icon: React.ReactElement;
  submenu: Array<any>;
}

const MenuData: Array<MenuDataType> = [
  {
    id: 1,
    text: 'Dashboard',
    url: '/dashboard',
    userAccess: true,
    icon: <DashboardIcon style={{ fill: 'white' }} />,
    title: '',
    shortText: '',
    submenu: [],
  },
  {
    id: 2,
    text: 'Posts',
    url: '/posts',
    userAccess: true,
    icon: <FeedIcon style={{ fill: 'white' }} />,
    title: '',
    shortText: '',
    submenu: [],
  },
];

export default MenuData;
