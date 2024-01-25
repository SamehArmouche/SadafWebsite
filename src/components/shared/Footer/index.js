import React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import colors from '../../../assets/theme/colors/'
import { useSelector } from 'react-redux'
import { fetchInformations } from '../../../redux/thunks';
import { useDispatch } from 'react-redux'

const divStyle = {
  justifyContent:'center',
  alignItems:'center',
  display:'flex',
  flexDirection:'column',
  height:120,
  backgroundColor:'black'
};

export default function Footer() {
  const { informations } = useSelector(
    (state) => state.informations
  )
  const openInNewTab = (url) => {
    if(url?.includes("http") || url?.includes("mailto") )
      window.open(url, "_blank", "noreferrer");
  };

  const dispatch: Dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchInformations());
  }, [dispatch]);

  const getUrl = (type) => {
   return informations.filter((item)=> item.type===type)[0]?.value;
  };

  return (
    <footer style={divStyle}>
      <Divider  sx={{width:{xs:'80%',md:'70%'}}}  />
      <Box sx={{width:'70%',justifyContent:'center',alignItems:'center'}}>
        <AlternateEmailIcon sx={{color:colors.divder,fontSize:26,p:2}} onClick={()=> openInNewTab(`mailto:${getUrl('5')}`)} />
        <TwitterIcon sx={{color:colors.divder,fontSize:26,p:2}} onClick={()=> openInNewTab(getUrl('3'))} />
        <FacebookIcon sx={{color:colors.divder,fontSize:26,p:2}} onClick={()=> openInNewTab(getUrl('2'))} />
        <YouTubeIcon sx={{color:colors.divder,fontSize:26,p:2}} onClick={()=> openInNewTab(getUrl('1'))} />
        <InstagramIcon sx={{color:colors.divder,fontSize:26,p:2}} onClick={()=> openInNewTab(getUrl('4'))} />
      </Box>
      <Box sx={{width:'70%',justifyContent:'center',alignItems:'center'}}>
        <h5 style={{color:colors.divder,margin:0}}>Powered by <a href="https://www.facebook.com/sameh.armouche.12/" style={{color:colors.divder}}>Sameh Armouche</a></h5>
      </Box>
    </footer>
  );
}