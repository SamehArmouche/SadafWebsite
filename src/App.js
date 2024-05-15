import './App.css';
import AppContainer from './pages/index.js'
import colors from './assets/theme/colors/'
import styles from './assets/theme/styles/'
import {
  Backdrop,
  createTheme,
  ThemeProvider,
  Fade,
  styled
} from '@mui/material';
import { useSelector } from 'react-redux'
import { SnackbarProvider } from 'notistack';
import { MaterialDesignContent } from 'notistack'
import Loading from './components/Loading'
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
  const theme = createTheme(styles(i18n));
  
  return (
    <Fade in={true}>
      <div className="App">
      <ThemeProvider theme={theme}>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backdropFilter: 'blur(3px)',
          flexDirection:'column',
          }}
          open={loadingContactForm}>
          <Loading/>
          <h4 style={{color:colors.primary}}> {t('loading')} </h4>
        </Backdrop>
          <SnackbarProvider maxSnack={1}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            autoHideDuration={3000}
            Components={{
              success: StyledMaterialDesignContent,
              error: StyledMaterialDesignContent,
            }}>
          </SnackbarProvider>
        </ThemeProvider>
      </div>
    </Fade>
  );
}

export default App;