import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppSuspense from 'components/core/AppSuspense';
import ToggleSidebarButton from './ToggleSidebarButton/ToggleSidebarButton';
import Sidebar from './Sidebar/Sidebar';
import ToggleUiModeButton from './ToggleUiModeButton/ToggleUiModeButton';

const MainLayout = () => {

  return (
    <Box sx={{ position: 'relative', height: '100vh',  width: '100%' }}>
      <Sidebar />
      <AppSuspense>
        <Outlet />
      </AppSuspense>
      <ToggleSidebarButton />
      <ToggleUiModeButton />
    </Box>
  );
}

export default MainLayout;
