import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
//import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
//import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'


const pages = ['Home','Services','Projects','Awards','Talent','Contact'];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



const CssMenu = styled((props: MenuProps) => (
  <Menu
    elevation={3}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme,type="lang" }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    width: type==="lang"?"20%":"100%",
    backgroundColor:'rgba(0, 0, 0,0.6)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 28,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));



function Header() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { t, i18n } = useTranslation();
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

  function handleClick(lang) {
    i18n.changeLanguage(lang);
    //document.dir = 'rtl';
    popupState.close()
    
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  /*const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };*/

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /*const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };*/

  const handleRoute = (route) =>{
    if(route.toLowerCase()==="home"){
      navigate(`/`);
    }else{
      navigate(`/${route.replace(" ","").toLowerCase()}`);
    }
    setAnchorElNav(null);
  }

  return (
    <AppBar position="static" sx={{backgroundColor:'transparent', boxShadow:0}} >
      <Container sx={{justifyContent:{ xs: 'left', sm: 'center' },display:'flex',marginTop:2}}>
        <Toolbar disableGutters sx={{justifyContent:{ xs: 'left',width:'100%' }}}>
          {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />*/}
          <Box sx={{display: { xs: 'none', sm: 'flex'} ,width:"10%"}}>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' }}}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color:'#f7d89f'}}
            >
              <MenuIcon />
            </IconButton>
            <CssMenu
              type="menu"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
           
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={(e)=>{handleRoute(page)}}>
                  <Typography textAlign="center"> {t(`header.${page.toLowerCase()}`)}</Typography>
                </MenuItem>
              ))}
            </CssMenu>
          </Box>
          <Box sx={{display: { xs: 'none', sm: 'flex'},width:"100%",justifyContent:'center'}}>
            {pages.map((page) => (
              <Button variant="menu"
                key={page}
                onClick={(e)=>{handleRoute(page)}}
              >
                {t(`header.${page.toLowerCase()}`)}
              </Button>
            ))}
          </Box>
          <Box sx={{width:"10%",paddingRight:2}}>
            <React.Fragment>
              <Button variant="menu" {...bindTrigger(popupState)}>
              {i18n.language.toUpperCase()}
              </Button>
              <CssMenu {...bindMenu(popupState)} type="lang">
                <MenuItem onClick={()=>handleClick('en')}>En</MenuItem>
                <MenuItem onClick={()=>handleClick('ar')}>Ar</MenuItem>
              </CssMenu>
            </React.Fragment>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;