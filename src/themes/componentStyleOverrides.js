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
    },
    MuiList: {
      styleOverrides: {
        root: {
          "&.ListCustomized": {
            display: 'flex',
            flexDirection: 'column',
            rowGap: '0.5rem'
          }
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.MuiListItemButtonCustomized": {
            "&::before": {
              position: "absolute",
              content: '""',
              width: 0,
              height: '100%',
              top: 0,
              left: 0,
              paddingX: "1rem",
              paddingY: "0.5rem",
              backgroundColor: colors.primary.main,
              borderRadius: '6px',
              zIndex: '1201',
              transition: 'all .3s ease'
            },
            "&.active": {
              paddingX: "1rem",
              paddingY: "0.5rem",
              backgroundColor: colors.primary.main,
              borderRadius: '6px',
              transition: 'all .3s ease',
              ".MuiListItemText-root": {
                zIndex: '1202',
                ...(isDarkMode ? { color: "#000000" } : {})
              },
              ".MuiListItemIcon-root": {
                zIndex: '1202',
                ...(isDarkMode ? { color: "#000000" } : {})
              }
            },
            "&:hover": {
              "::before": {
                width: "100%",
              },
              ".MuiListItemText-root": {
                zIndex: '1202',
                ...(isDarkMode ? { color: "#000000" } : {})
              },
              ".MuiListItemIcon-root": {
                zIndex: '1202',
                ...(isDarkMode ? { color: "#000000" } : {})
              }
            }
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          "&.ListItemIconCustomized": {
            minWidth: 0,
            marginRight: "1rem"
          }
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          "&.ListItemTextCustomized": {
            ".MuiTypography-root":{
              fontWeight: '500'
            }
          }
        }
      }
    }
  };
}

export default componentStyleOverrides;
