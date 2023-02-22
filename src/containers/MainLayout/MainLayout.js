import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AppSuspense from 'components/core/AppSuspense';
import ToggleSidebarButton from './ToggleSidebarButton/ToggleSidebarButton';
import Sidebar from './Sidebar/Sidebar';
import ToggleUiModeButton from './ToggleUiModeButton/ToggleUiModeButton';

const MainLayout = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      display: 'grid', 
      gridTemplateColumns: '0 1fr',
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: '20rem 1fr',
      },
      height: '100vh', 
      width: '100%',
      transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.complex,
      })
    }}>
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
