import { Fab, useTheme, useMediaQuery } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

const ScrollToTopButton = () => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fab 
      color="primary" 
      aria-label="sidebar"
      className='MuiFabCustomized' 
      sx={{ bottom: useMediaQuery(theme.breakpoints.up("md")) ? 16 : 90 }}
      onClick={scrollToTop}
    >
      <KeyboardArrowUp />
    </Fab>
  )
}

export default ScrollToTopButton;