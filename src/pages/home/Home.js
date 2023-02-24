import { useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Element } from 'react-scroll';
import { useInView } from "react-intersection-observer";
import { uiActions } from 'store/ui/uiSlice';
import { UI_VARIABLES } from 'constants/ui';

const sections = ['home', 'about', 'portfolio', 'contact'];

const Section = ({ section, position }) => {
  const [ref, inView] = useInView();
  const modeUi = useSelector(state => state.uiStore.mode);
  const dispatch = useDispatch();

  const darkModeBackgroundColor = position % 2 === 0 ? '#2a2e3c' : '#1a1c26';
  const lightModeBackgroundColor = position % 2 === 0 ? '#e7e7e7' : '#f5f8fc';

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
        height: '60rem',
        backgroundColor: backgroundColor
      }}
    >
      <Element name={section}></Element>
    </Box>
  );
}

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{ overflow: "scroll", paddingLeft: useMediaQuery(theme.breakpoints.up('md')) ? '320px' : 0 }}>
      {sections.map((section, index) => (
        <Section key={index} section={section} position={index} />
      ))}
    </Box>
  );
}

export default Home;