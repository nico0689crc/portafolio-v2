import { Fab } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
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
    >
      { uiMode === UI_VARIABLES.UI_MODE_LIGHT ? <DarkMode /> : <LightMode />} 
    </Fab>
  )
}

export default ToggleUiModeButton;