import { useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Element } from 'react-scroll';
import { useInView } from "react-intersection-observer";
import { uiActions } from 'store/ui/uiSlice';
import { UI_VARIABLES } from 'constants/ui';
import Home from "./Home/Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Section = ({ section, position, children }) => {
  const [ref, inView] = useInView();
  const modeUi = useSelector(state => state.uiStore.mode);
  const dispatch = useDispatch();

  const darkModeBackgroundColor = position === 'odd' ? '#2a2e3c' : '#1a1c26';
  const lightModeBackgroundColor = position === 'even' ? '#e7e7e7' : '#f5f8fc';

  const backgroundColor = UI_VARIABLES.UI_MODE_LIGHT === modeUi ? lightModeBackgroundColor : darkModeBackgroundColor;

  useEffect(() => {
    if (inView) {
      dispatch(uiActions.setSidebarMenuItemActive({ section }))
    }
  }, [inView, section, dispatch]);

  return (
    <Box 
      ref={ref} 
      sx={{ 
        backgroundColor: backgroundColor,
        height: "60rem" 
      }}
    >
      <Element name={section}>{children}</Element>
    </Box>
  );
}

const Sections = () => {
  const theme = useTheme();

  return (
    <Box sx={{ overflow: "scroll", paddingLeft: useMediaQuery(theme.breakpoints.up('md')) ? '320px' : 0 }}>
      <Section section="home" position="even">
        <Home />
      </Section>
      <Section section="about" position="odd">
        <About />
      </Section>
      <Section section="portfolio" position="even">
        <Portfolio />
      </Section>
      <Section section="contact" position="odd">
        <Contact />
      </Section>
    </Box>
  );
}

export default Sections;