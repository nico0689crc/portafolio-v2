import { Box } from "@mui/material";
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <Box sx={{ overflow: "scroll" }}>
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