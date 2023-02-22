const componentStyleOverrides = ({isDarkMode, colors, theme}) => {
  return { 
    MuiFab: {
      styleOverrides: {
        root: {
          "&.MuiFabCustomized": {
            position: 'absolute',
            right: '1.5rem',
            width: '2.75rem',
            height: '2.75rem'
          }
        }
      }
    },
  };
}

export default componentStyleOverrides;
