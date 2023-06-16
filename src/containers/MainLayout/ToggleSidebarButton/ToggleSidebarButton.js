import { Fab, useMediaQuery, useTheme } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from 'store/ui/uiSlice';

const ToggleSidebarButton = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const matchUpMd = useMediaQuery (theme.breakpoints.up('md'));
  const sidebarOpen = useSelector( state => state.uiStore.sidebarOpen);

  const toggleSidebarHandler = () => {
    dispatch(uiActions.toggleSidebar());
  }

  return (
    !matchUpMd ? (
      <Fab 
        color="primary" 
        aria-label="sidebar"
        className='MuiFabCustomized'
        sx={{ bottom: 16 }}
        onClick={toggleSidebarHandler}
      >
       {sidebarOpen ? <Close /> : <Menu />} 
      </Fab>
    ) : (null)
  )
}

export default ToggleSidebarButton;