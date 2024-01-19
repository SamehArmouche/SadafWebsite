import {
  Button,
  Dialog,
  DialogTitle,
  Box,
  CardMedia
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

export default function Details({open, children, handleClickOpen, handleClose, title, height, description, img}) {

  return (
    <div >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        slotProps={{
          backdrop: {
            sx: {
              backdropFilter: "blur(3px)"
            },
          },
        }}
      >
        <Box sx={{backgroundColor:"black",borderRadius:0}}>
        <Box sx={{borderRadius:0}}>
          <Button variant="menu"autoFocus onClick={handleClose} sx={{display:'flex',height:40}} >
            <CloseIcon   onClick={handleClose}/>
          </Button>
        </Box>
        {img &&
            <CardMedia
              component="img"
              height={300}
              width={300}
              image={img}
              alt="service_img"
              sx={{borderRadius:2}}
            >
            </CardMedia>
          }
        <DialogTitle id="responsive-dialog-title" sx={{fontWeight:'bold',fontSize:19}}>
          {title}
        </DialogTitle>
        <DialogTitle id="responsive-dialog-title" sx={{fontWeight:'bold',fontSize:19}}>
          {description}
        </DialogTitle>
        </Box>
      </Dialog>
    </div>
  );
}