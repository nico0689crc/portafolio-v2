import { Paper, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from 'store/ui/uiSlice';
import SidebarContent from "./SidebarContent/SidebarContent";

const Sidebar = () => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const sidebarOpen = useSelector( state => state.uiStore.sidebarOpen);
  const dispatch = useDispatch();

  const toggleSidebarHandler = () => {
    dispatch(uiActions.toggleSidebar());
  }

  return (
    matchUpMd ? (
      <Paper elevation={2} sx={{position: 'fixed', width: '20rem', height: '100%'}}>
        <SidebarContent />
      </Paper>
    ) : (
      <Drawer
        anchor='left'
        open={sidebarOpen}
        onClose={toggleSidebarHandler}
      >
        <Paper 
          elevation={2} 
          sx={{
            width: '17.5rem',
            height: '100%',
            [theme.breakpoints.up('sm')]: {
              width: '20rem',
            },
          }}
        >
          <SidebarContent />
        </Paper>
      </Drawer>
    )
  );
}

export default Sidebar;