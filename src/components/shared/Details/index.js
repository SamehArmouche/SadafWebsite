import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Box
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

export default function Details({open, children, handleClickOpen, handleClose, title, height}) {

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
        <DialogTitle id="responsive-dialog-title" sx={{fontWeight:'bold',fontSize:19}}>
          {title}
        </DialogTitle>
        <DialogActions sx={{p:3,justifyContent:'space-between'}}>
          <div>
            <Button autoFocus onClick={handleClose} sx={{backgroundColor:'black',height:20,width:20}} >
              <CloseIcon />
            </Button>
          </div>
        </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}