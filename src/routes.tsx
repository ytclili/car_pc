import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import UserManagement from './pages/UserManagement';
import { Navigate } from 'react-router-dom';

const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
    breadcrumb: '数据看板',
  },
  {
    path: '/user-management',
    element: <UserManagement />,
    breadcrumb: '用户管理',
  },
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  // 这里可以继续添加更多页面路由
];

export default routes;
