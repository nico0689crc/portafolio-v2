const componentStyleOverrides = ({isDarkMode, colors, theme}) => {
  return { 
    MuiFab: {
      styleOverrides: {
        root: {
          "&.MuiFabCustomized": {
            position: 'fixed',
            right: '1.5rem'
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          "&.MuiDividerCustomized": {
            ...(isDarkMode ? { borderColor: colors.primary.main } : {})
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.TypographyCustomHeader": {
            "&::first-letter": {
              ...(isDarkMode ? { color: colors.primary.main } : {})
            }
          }
        }
      }
    }
  };
}

export default componentStyleOverrides;
