import { Fab } from '@mui/material';
import { motion } from "framer-motion";
import Iconify from 'components/ui/Iconify';
import useLocales from 'hooks/useLocales';


const ToggleLanguageButton = () => {
  const { langToChange, onChangeLang } = useLocales();

  return (
    <Fab 
      color="primary" 
      aria-label="sidebar"
      className='MuiFabCustomized' 
      sx={{ top: 80 }}
      onClick={onChangeLang}
      component={motion.div}
      key="scroll-to-top"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Iconify icon={langToChange.icon} sx={{ borderRadius: 0.65, width: 25 }}/>
    </Fab>
  )
}

export default ToggleLanguageButton;