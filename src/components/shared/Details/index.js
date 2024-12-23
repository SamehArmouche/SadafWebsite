import {
  Button,
  Dialog,
  DialogTitle,
  Box,
  CardMedia,
  Typography
} from '@mui/material'
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Details({
  fullScreen=false,open, children, 
  handleClickOpen, handleClose, title, height, description, img, direction, alt,
  children2, buttons}) {

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={fullScreen}
      TransitionComponent={Transition}
      aria-labelledby="responsive-dialog-title"
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(3px)"
          },
        },
      }}
    >
      <Box sx={{backgroundColor:"black",borderRadius:2}}>
        <Box sx={{borderRadius:2}}>
          <Button variant="menu"autoFocus onClick={handleClose} sx={{display:'flex',height:40}} >
            <CloseIcon   onClick={handleClose}/>
          </Button>
            {
              buttons
            }
        </Box>
        {img &&
            <CardMedia
              component="img"
              height={alt==="service"?250:300}
              width={alt==="service"?150:300}
              image={img}
              alt={alt}
              sx={alt==="service"?{borderRadius:2}:{borderTopLeftRadius:8,borderTopRightRadius:8}}
            >
            </CardMedia>
          }
          {children}
        <DialogTitle id="responsive-dialog-title" sx={{fontWeight:'bold',fontSize:21,padding:"24px 24px 16px"}}>
          {title}
        </DialogTitle>
        <DialogTitle id="responsive-dialog-title" sx={{fontSize:18,textAlign:"justify"}}>
          {
            Array.isArray(description)?
            description?.map((d)=>{
              return (
                <Typography key={d} textAlign={direction==='ltr'?'left':'right'} sx={{mb:2}}><li>{d}</li></Typography>
              )
            })
            : description
          }
        </DialogTitle>
        {children2}
      </Box>
    </Dialog>
  );
}