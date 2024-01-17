import React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import colors from '../../../assets/theme/colors/'
const footerHeight = 60;
const footerEltMarginTop = 5;

const divStyle = {
  height: `${footerHeight + footerEltMarginTop}px`,
  backgroundColor:'transparent',
  justifyContent:'center',
  alignItems:'center',
  display:'flex',
  flexDirection:'column'
};

export default function Footer() {
  return (
    <>
      <Box style={divStyle}>
        <Divider  sx={{width:{xs:'80%',md:'70%'}}}  />
        <Box sx={{width:'70%',justifyContent:'center',alignItems:'center'}}>
          <TwitterIcon sx={{color:colors.divder,fontSize:26,p:2}} />
          <FacebookIcon sx={{color:colors.divder,fontSize:26,p:2}} />
          <YouTubeIcon sx={{color:colors.divder,fontSize:26,p:2}} />
          <InstagramIcon sx={{color:colors.divder,fontSize:26,p:2}} />
        </Box>
      </Box>
   </>
  );
}