import colors from '../colors'

const styles = (i18n) => ({
  palette: {
    action: {
        selectedOpacity:0.1,
        hover: colors.hover,
        disabled: colors.divder,
        disabledBackground:'red'
    },
    primary: {
      main: colors.hover,
    },
    error: {
      main: colors.error,
    },
  },
  components: {
    MuiMenuItem: { // For ListItem, change this to MuiListItem
      styleOverrides:{
        root: {
        "&$selected": {       // this is to refer to the prop provided by M-UI
          backgroundColor: "black", // updated backgroundColor
        },
      }},
    },
    MuiTableCell: {
      styleOverrides:{
      root: {
        height:22,
        padding:13,
        fontSize:15,
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        
      }
      }
    },
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          backgroundColor:'black',
          borderRadius:10,
          boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiPickersDay:{
      styleOverrides:{
        root: {
          color:colors.primary
        }
      }
    },
    MuiDivider:{
      styleOverrides:{
        root: {
          backgroundColor:colors.divder
        }
      }
    },
    MuiSvgIcon:{
      styleOverrides:{
        root: {
          color:colors.primary
        }
      }
    },
    MuiChip:{
      styleOverrides:{
        root: {
          color:colors.primary
        }
      }
    },

    /*MuiAutocomplete: {
      defaultProps: {
        slotProps: {
          paper: {
            elevation: 6,
            backgroundColor:'red'
          }
        }
      }
    },*/
    MuiStepper: {
      defaultProps: {
        alternativeLabel: true
      },
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiStep: {
      styleOverrides: {
        alternativeLabel: {
          minWidth: 64
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop:0,
          paddingBottom:0,
          marginBottom:5
        }
      }
    },
    MuiStepConnector: {
      styleOverrides: {
        alternativeLabel: {
          top: 14,
          height: 2,
          minWidth: 10,
          left: i18n.dir()==="rtl"?"calc(50% + 32px)":"calc(-50% + 32px)",
          right: i18n.dir()==="rtl"?"calc(-50% + 32px)":"calc(50% + 32px)",
        }
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        iconContainer: {
          // NOT APPLIED
          "&.Mui-active": {
            color: "black",
            background: colors.primary
          },

          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: colors.secondary,
          width: 28,
          height: 28,
          borderRadius: "50%",
        }
      }
    },
    MuiButton: {
      styleOverrides: { 
        root: { minWidth: 0 } ,
        "&.Mui-disabled": {
          background: "#f3f3f3",
          color: "#dadada"
        }
      } ,
      variants: [

        {
          props: { variant: 'dashed' },
          style: {
            backgroundColor:'#f7d89f',
            color:'black',
            border:0,
            m:1,
            fontWeight:'bold',
            fontSize:14,
            boxShadow: '0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)',
          },
        },
        {
          props: { variant: 'menu' },
          style: {
            backgroundColor:'transparent',
            color:colors.primary,
            border:0,
            display: 'block',
            fontSize:"16px",
          },
        },
        {
          props: { variant: 'home' },
          style: {
            backgroundColor:'rgba(0, 0, 0,0.6)',
            color:colors.primary,
            border:0,
            marginTop:20,
            padding:0,
            width:220,
            borderRadius:20,
            display: 'block',
            fontSize:"20px",
          },
        },
        {
          props: { variant: 'contact' },
          style: {
            backgroundColor:'rgba(247, 216, 159, 0.1)',
            color:colors.primary,
            border:0,
            height:40,
            margin:30,
            padding:0,
            width:220,
            borderRadius:20,
            display: 'block',
            fontSize:"16px",
          },
        }
      ],


    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Cairo',
      textTransform: 'none',
      fontSize: "15px",
      color:colors.primary
    },
  }
});

export default styles