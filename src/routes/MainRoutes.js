import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from 'containers/layouts/MainLayout/MainLayout';
import Loadable from 'components/ui/Loadable/Loadable';
const Home = Loadable(lazy(() => import('pages/home/Home')));

// ==============================|| MAIN ROUTING ||============================== //

export const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '/', element: <Home /> }
  ]
};

export const MainRoutesNavigate = {
  path: '/auth/signin',
  element: <Navigate replace to="/" />,
};
