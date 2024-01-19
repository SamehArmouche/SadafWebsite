import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppContainer from './pages/index.js'
import colors from './assets/theme/colors/'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux'


const theme = createTheme({
  palette: {
    action: {
        selectedOpacity:0.1,
        hover: colors.hover,
    },
    primary: {
      main: colors.hover
    }
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
    MuiDivider:{
      styleOverrides:{
        root: {
          backgroundColor:colors.divder
        }
      }
    },
    MuiTable: {
      styleOverrides:{
        root: {
            
            //boxShadow: '0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)',
            //width:'100%',
            //margin:18,
            

        },
      }
    },
    MuiButton: {
      styleOverrides: { 
        root: { minWidth: 0 } 
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


function App() {
  const {loading } = useSelector(
    (state) => state.preferences
  )
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;