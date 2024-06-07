import { Fab } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from "framer-motion";
import { uiActions } from 'store/ui/uiSlice';
import { UI_VARIABLES } from "constants/ui";

const ToggleUiModeButton = () => {
  const dispatch = useDispatch();
  const uiMode = useSelector( state => state.uiStore.mode);

  const toggleUiModeHandler = () => {
    dispatch(uiActions.toggleUiMode());
  }

  return (
    <Fab 
      color="primary" 
      aria-label="sidebar"
      className='MuiFabCustomized' 
      sx={{ top: 16 }}
      onClick={toggleUiModeHandler}
      component={motion.div}
      key="scroll-to-top"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      { uiMode === UI_VARIABLES.UI_MODE_LIGHT ? <DarkMode /> : <LightMode />} 
    </Fab>
  )
}

export default ToggleUiModeButton;