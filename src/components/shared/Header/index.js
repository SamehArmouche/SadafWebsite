import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
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
import { useTheme } from '@mui/material/styles';
import myImg from '../../../assets/images/logo.png';
import { Turn as Hamburger } from 'hamburger-react'
const pages = ['Home','Services','Projects','Awards','Successes','Talents','Contact'];



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
    width: type==="lang"?120:"100%",
    backgroundColor:'rgba(0, 0, 0,0.95)',
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
  const { t, i18n } = useTranslation();
  const [isOpen, setOpen] = React.useState(false)
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
  const theme = useTheme();
  document.body.dir = i18n.dir();
  function handleClick(lang) {
    i18n.changeLanguage(lang)
    document.body.dir = i18n.dir();
    theme.direction = i18n.dir();
    popupState.close()
    
  }

  const handleOpenNavMenu = (event) => {
    setOpen(!isOpen)
    setAnchorElNav(event.currentTarget);

  };
  /*const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };*/

  const handleCloseNavMenu = () => {
    setOpen(!isOpen)
    setAnchorElNav(null);
  };

  const getCurrentPageName = () =>{
    if(window.location.pathname==="/")
      return "home"
    const currentPage = pages.filter(p => p.toLowerCase()===window.location.pathname.replace("/",""))[0]?.toLowerCase();
    return (currentPage===undefined?"":currentPage);
  }

  /*const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };*/

  const handleRoute = (route) =>{
    if(route.toLowerCase()==="home"){
      navigate(`/`);
    }else{
      navigate(`/${route.replace(" ","").toLowerCase()}`);
    }
    handleCloseNavMenu();
  }

  return (
    <AppBar position="static" sx={{backgroundColor:'transparent', boxShadow:0}} >
      <Box sx={{justifyContent:'center',display:{xs:'none',md:'flex'},opacity:0.8}}>
        <img src = {myImg}  alt={"sadaf logo"} onClick={()=>handleRoute("home")} style={{height:20,paddingTop:18}}></img> 
      </Box>
      <Container sx={{justifyContent:{ xs: 'left', md: 'center' },display:'flex',marginTop:2}}>

        <Toolbar disableGutters sx={{width:'100%',display:'flex' ,justifyContent:'space-between'}}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },maxWidth:74,maxHeight:40}}>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ p:0,color:'#f7d89f',width:50,height:50}}
            >
              <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} size={20} direction={i18n.dir()==='rtl'?"left":"right"}/>
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
                <MenuItem key={page} onClick={(e)=>{handleRoute(page)}}
                selected={`/${page.toLowerCase()}` === window.location.pathname}
                >
                  <Typography textAlign="center"> {t(`header.${page.toLowerCase()}`)}</Typography>
                </MenuItem>
              ))}
            </CssMenu>
          </Box>
          <Box sx={{display: { xs: 'none', md: 'flex'},width:"100%",justifyContent:'center'}}>
            {pages.map((page) => (
              <MenuItem variant="menu"
                selected={`/${page.toLowerCase()}` === window.location.pathname}
                sx={{borderRadius:1}}
                key={page}
                onClick={(e)=>{handleRoute(page)}}
              >
                {t(`header.${page.toLowerCase()}`)}
              </MenuItem>
            ))}
          </Box>
          <Box sx={{padding:0,display: { xs: 'flex', md: 'none'}}} >
            <Typography sx={{fontSize: 20}}> {getCurrentPageName()!==""?t(`header.${getCurrentPageName()}`):""} </Typography>
          </Box>
          <Box sx={{padding:0}} >
            <React.Fragment>
              <Button variant="menu" {...bindTrigger(popupState)}>
                {t(`dropdown.lang`)}
              </Button>
              <CssMenu {...bindMenu(popupState)} type="lang">
                <MenuItem selected={i18n.language==="en"} onClick={()=>handleClick('en')}>English</MenuItem>
                <MenuItem selected={i18n.language==="ar"} onClick={()=>handleClick('ar')}>العربية</MenuItem>
              </CssMenu>
            </React.Fragment>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;