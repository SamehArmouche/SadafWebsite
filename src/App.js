import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppContainer from './pages/index.js'
import colors from './assets/theme/colors/'
import {Backdrop} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux'
import { SnackbarProvider } from 'notistack';
import { MaterialDesignContent } from 'notistack'
import { styled } from '@mui/material/styles';
import { Fade } from '@mui/material';
import { useTranslation } from 'react-i18next';

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: colors.primary,
    color:'black',
    fontWeight:'bold',
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#970C0C',
    fontWeight:'bold'
  },
}));


function App() {
  const {loadingContactForm } = useSelector(
    (state) => state.contactForm
  )

  const { t, i18n } = useTranslation();
  const theme = createTheme({
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
            borderRadius:2,
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
      MuiAutocomplete: {
        defaultProps: {
          slotProps: {
            paper: {
              elevation: 6,
              backgroundColor:'red'
            }
          }
        }
      },
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
  

  
  return (
    <Fade in={true}>
      <div className="App">
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backdropFilter: 'blur(3px)'}}
          open={loadingContactForm}>
          <CircularProgress sx={{color: colors.primary,m:2}} />
          <h4 style={{color:colors.primary}}> {t('loading')} </h4>
        </Backdrop>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={1}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            autoHideDuration={3000}
            Components={{
              success: StyledMaterialDesignContent,
              error: StyledMaterialDesignContent,
            }}>
            <AppContainer />
          </SnackbarProvider>
        </ThemeProvider>
      </div>
    </Fade>
  );
}

export default App;