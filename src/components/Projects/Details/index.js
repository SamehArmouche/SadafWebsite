import {
  Button,
  Dialog,
  DialogTitle,
  Box,
  Grid,
  Typography
} from '@mui/material'
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Details({
  fullScreen=false,open, children, i18n,client_url, client_logo_url,
  handleClickOpen, handleClose, title, height, description, img, direction, alt,
  children2, buttons, t}) {
  const [videoRef] = React.useState(React.createRef());
  const [played, setPlayed] = React.useState(false);

  const handlePlay = () => {
    if(played){
      videoRef.current.pause();
      setPlayed(false);
    }else{
      videoRef.current.play();
      setPlayed(true);
    }

  }

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
        {img &&
          <div className="video-container">

            <video 
              ref={videoRef}
                id="project-video-detail"  
                playsInline 
                loop>
                <source src={img} type="video/mp4"/>
            </video>
            <div className="gradient-overlay"></div>
            <div className="button-overlay-close">
              <Button variant="menu"autoFocus onClick={handleClose} sx={{display:'flex',height:30}} >
                <CloseIcon   onClick={handleClose}/>
              </Button>
            </div>
            <div className="button-overlay">
                <Button autoFocus onClick={handlePlay} sx={{display:'flex',height:40,borderRadius:100}} >
                  {
                    !played?
                    <PlayArrowIcon  />:
                    <PauseIcon  />
                    }
                </Button>
                </div>
            </div>
         }
          {children}
        <DialogTitle id="responsive-dialog-title" sx={{fontWeight:'bold',fontSize:31,padding:"24px 24px 16px",
          textAlign:i18n.dir()!=='ltr'?'right':'left',
          display:'flex',
          alignItems:'center'
        }}>
          {title}

          <Grid onClick= {(()=> window.open(client_url, '_blank').focus())} sx={{flexDirection:'row',display:'flex',textAlign:i18n.dir()!=='ltr'?'right':'left',pr:3,pl:3,pb:0.5,pt:0.5}}>
                <img src={client_logo_url}
                  alt={"alt"}
                  className={"client-img"}
                />
              </Grid>


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