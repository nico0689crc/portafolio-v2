import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from 'containers/MainLayout/MainLayout';
import Loadable from 'components/ui/Loadable/Loadable';
const Sections = Loadable(lazy(() => import('pages/sections/Sections')));

export const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '/', element: <Sections /> }
  ]
};

export const MainRoutesNavigate = {
  path: '/auth/signin',
  element: <Navigate replace to="/" />,
};
