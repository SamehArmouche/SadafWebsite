import {
  Button,
  Grow,
  DialogTitle,
  Grid,
  Typography
} from '@mui/material'
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Details({
  fullScreen=false,open, children, i18n,client_url, client_logo_url,
  handleClickOpen, category,handleClose, title, height, description, img, direction, alt,
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
        <Grow
          mountOnEnter 
          unmountOnExit
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...{ timeout: (700) }}>
      <Grid sx={{backgroundColor:"black",borderRadius:2}}>
        {img &&
          <div className="video-container">

            <video 
              ref={videoRef}
                id="project-video-detail"  
                playsInline 
                controls
                autoPlay>
                <source src={img} 

                type="video/mp4"/>
            </video>
            <div className="video-gradient-overlay"></div>
              <div className="button-overlay-close">
                <Button variant="menu"autoFocus onClick={handleClose} sx={{display:'flex',height:30}} >
                  <CloseIcon   onClick={handleClose}/>
                </Button>
              </div>
            </div>

         }
          {children}
            <DialogTitle id="responsive-dialog-title" sx={{
              
              textAlign:i18n.dir()!=='ltr'?'right':'left',
              display:'flex',
              flexDirection:'column'
            }}>
              <Grid sx={{flexDirection:'row',display:'flex',alignItems:'center'}}>
                <Typography sx={{fontSize:31,fontWeight:'bold'}} >{title}</Typography>
                <Typography sx={{color:'white',mr:2,ml:2}} >{category}</Typography>

              </Grid>
              <Grid onClick= {(()=> window.open(client_url, '_blank').focus())} 
                sx={{flexDirection:'row',display:'flex',textAlign:i18n.dir()!=='ltr'?'right':'left',pt:4}}>
                  <img src={client_logo_url}
                    alt={"alt"}
                    style={{alignSelf:'center'}}
                    className={"client-img"}
                  />
              </Grid>

          </DialogTitle>
        <DialogTitle id="responsive-dialog-title" sx={{fontSize:22,textAlign:"justify",color:'white'}}>
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
      </Grid>
      </Grow>
  );
}