import { red, grey } from '@mui/material/colors';

const colors = {
  primary: {
    main: "#ffd51a",
  },
  background: {
    "dark-mode": {
      default: "#191c26",
      paper: "#000000",
      button: {
        regular: "#ffffff1a",
        hover: "#ffffff33"
      } 
    },
    "light-mode": {
      default: "#f5f8fc",
      paper: "#ffffff",
      button: {
        regular: red['50'],
        hover: red['100']
      } 
    }
  },
  typography: {
    "dark-mode": {
      button: {
        color: 'inherit'
      } 
    },
    "light-mode": {
      button: {
        color: red['500']
      } 
    }
  },
  text: {
    "dark-mode": {
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      third: "rgba(255, 255, 255, 0.6)",
      fourth: "rgba(255, 255, 255, 0.4)",
      fifth: "rgba(255, 255, 255, 0.3)"
    },
    "light-mode": {
      disabled: "rgba(0, 0, 0, 0.38)",
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      third: "rgba(0, 0, 0, 0.5)",
      fourth: "rgba(0, 0, 0, 0.4)",
      fifth: "rgba(0, 0, 0, 0.2)"
    }
  },
  grey
};

export default colors;