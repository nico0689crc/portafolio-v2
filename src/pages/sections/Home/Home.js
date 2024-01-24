import { Box, Button, Divider, IconButton, Stack, Tooltip, Typography, useTheme } from "@mui/material";
import ProfilePicture from "assets/images/profile.jpeg";
import ProfilePictureShape from "assets/images/profile-shape.svg";
import Resume from "assets/resume/Nicolas-Ariel-Fernandez-Resume-Web-Developer.pdf"
import { GitHub, HomeRepairService, LinkedIn } from "@mui/icons-material";
import { UI_VARIABLES } from "constants/ui";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const IconButtonSocialMedia = ({children, href, title}) => {
  const theme = useTheme();

  return (
    <Tooltip title={title} placement="top">
      <IconButton
        component="a"
        href={href}
        aria-label="social"
        target="_blank" 
        color={UI_VARIABLES.UI_MODE_DARK === theme.palette.mode ? 'primary' : 'default'}
        sx={{
          transition: "all .3s ease",
          "&:hover": {
            transform: 'translateY(-5px);'
          }
        }}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
}

const Home = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Stack alignItems="center" justifyContent="center" sx={{ minHeight: '120vh'}} gap={3}>
      <Box 
        component={motion.div}
        key="image-profile"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ 
          height: {xs: '200px', md: '300px'}, 
          width: {xs: '200px', md: '300px'},
          "& img": {
            width: '100%',
            maskImage: `url('${ProfilePictureShape}');`,
            maskRepeat: 'no-repeat'
          }
        }}
      > 
        <img src={ProfilePicture} alt="profile"/>
      </Box>
      <Stack 
        direction={{xs: 'column', sm: 'row', md: 'column', lg: 'row'}}
        alignItems="center" 
        gap={1}
        component={motion.div}
        key="full-name"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: '100',
            fontSize: '2rem',
            [theme.breakpoints.up('md')]: {
              fontSize: '3rem'
            } 
          }}
        >
          NICOLAS ARIEL
        </Typography>
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: '700',
            fontSize: '2rem',
            [theme.breakpoints.up('md')]: {
              fontSize: '3rem'
            } 
          }}
        >
          FERNANDEZ
        </Typography>
      </Stack>
      <Stack 
        alignItems="center"
        component={motion.div}
        key="description"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.7 }}
        gap={2}
      >
        <Typography variant="h6" sx={{ fontWeight: '500', fontSize: '1.15rem', color: theme.palette.text.secondary}}>
          FULLSTACK WEB DEVELOPER  
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: '300', 
            fontSize: '1rem', 
            color: theme.palette.text.secondary, paddingX: '4rem',
            textAlign: 'center'
          }}
        >
          REACTJS, NODEJS, EXPRESS JS, MONGODB, RUBY ON RAILS   
        </Typography>
      </Stack>
      <Stack 
        direction="row" 
        gap={1}
        component={motion.div}
        key="social-buttons"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <IconButtonSocialMedia title="GitHub" href="https://github.com/nico0689crc">
          <GitHub />
        </IconButtonSocialMedia>
        <Divider orientation="vertical" flexItem/>
        <IconButtonSocialMedia title="LinkedIn" href="https://www.linkedin.com/in/nicolas-ariel-fernandez">
          <LinkedIn />
        </IconButtonSocialMedia>
        <Divider orientation="vertical" flexItem/>
        <IconButtonSocialMedia title="Workana" href="https://www.workana.com/freelancer/ebf3574ed2af2e47ccf8e68f2fc23f11">
          <HomeRepairService />
        </IconButtonSocialMedia>
      </Stack>
      <Box
        component={motion.div}
        key="download-resume"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.9 }} 
      >
        <Button
          component="a"
          href={Resume}
          target="_blank" 
          variant="outlined"
          sx={{ 
            borderRadius: '30px', 
            paddingX: '2rem', 
            paddingY: '1rem', 
            border: '2px solid',
            ...(UI_VARIABLES.UI_MODE_LIGHT === theme.palette.mode ? { borderColor: theme.palette.text.secondary } : {}),
            ...(UI_VARIABLES.UI_MODE_LIGHT === theme.palette.mode ? { color: theme.palette.text.secondary } : {}),
            transition: "all .3s ease",
            "&:hover": {
              border: '2px solid',
              ...(UI_VARIABLES.UI_MODE_LIGHT === theme.palette.mode ? { borderColor: theme.palette.primary } : {}),
              ...(UI_VARIABLES.UI_MODE_LIGHT === theme.palette.mode ? { color: theme.palette.text.secondary } : {}),
              transform: 'translateY(-5px);'
            }
          }}
        >
          {t("home.download_resume")}
        </Button>
      </Box>
    </Stack>
  );
}

export default Home;