import { Fab, useTheme, useMediaQuery } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const isUpToMd = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Fab 
          color="primary" 
          aria-label="sidebar"
          className='MuiFabCustomized' 
          sx={{ bottom: isUpToMd ? 16 : 90 }}
          onClick={scrollToTop}
          component={motion.div}
          key="scroll-to-top"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <KeyboardArrowUp />
        </Fab>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTopButton;