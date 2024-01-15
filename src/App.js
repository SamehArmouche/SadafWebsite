import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppContainer from './pages/index.js'
import colors from './assets/theme/colors/'
const theme = createTheme({
  components: {
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
            marginRight:20,
            display: 'block',
            fontSize:"16px",
          },
        },
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
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <AppContainer />
    </div>
    </ThemeProvider>
  );
}

export default App;
