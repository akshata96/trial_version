import React from 'react';
import {
    DashboardOutlined ,
    LineChartOutlined,
    EnterOutlined,
    SearchOutlined,
    ReconciliationOutlined,
    CommentOutlined,
    TeamOutlined
} from '@ant-design/icons';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <DashboardOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'steps',
    path: '/steps',
    icon: <EnterOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'LeaderBoard',
    path: '#',
    icon: <LineChartOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Teams',
    path: '/teams',
    icon: <TeamOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Forum',
    path: '/messages',
    icon: <CommentOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Report',
    path: '/',
    icon: <ReconciliationOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Search',
    path: '/',
    icon: <SearchOutlined />,
    cName: 'nav-text'
  }
];