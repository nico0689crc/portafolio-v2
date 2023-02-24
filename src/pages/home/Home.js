import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Element } from 'react-scroll';

const Home = () => {
  const theme = useTheme();


  return (
    <Box sx={{ overflow: "scroll", paddingLeft: useMediaQuery(theme.breakpoints.up('md')) ? '320px' : 0 }}>
      <Box sx={{ height: '60rem', backgroundColor: 'red' }}>
        <Element name="home"></Element>
      </Box>
      <Box sx={{ height: '60rem', backgroundColor: 'green' }}>
        <Element name="about"></Element>
      </Box>
      <Box sx={{ height: '60rem', backgroundColor: 'blue' }}>
        <Element name="portfolio"></Element>
      </Box>
      <Box sx={{ height: '60rem', backgroundColor: 'yellow' }}>
        <Element name="contact"></Element>
      </Box>
    </Box>
  );
}

export default Home;