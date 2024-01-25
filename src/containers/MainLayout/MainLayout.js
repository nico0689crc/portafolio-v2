import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppSuspense from 'components/core/AppSuspense';
import ToggleSidebarButton from './ToggleSidebarButton/ToggleSidebarButton';
import Sidebar from './Sidebar/Sidebar';
import ToggleUiModeButton from './ToggleUiModeButton/ToggleUiModeButton';
import ScrollToTop from 'components/ui/ScrollToTop/ScrollToTop';
import ToggleLanguageButton from './ToggleLanguageButton/ToggleLanguageButton';

const MainLayout = () => {

  return (
    <Box sx={{ position: 'relative', height: '100vh',  width: '100%' }}>
      <Sidebar />
      <AppSuspense>
        <Outlet />
      </AppSuspense>
      <ToggleSidebarButton />
      <ToggleUiModeButton />
      <ToggleLanguageButton />
      <ScrollToTop />
    </Box>
  );
}

export default MainLayout;
