import {
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { useLocation } from 'react-router-dom'

const ReviewInfo = () => {
  const { state } = useLocation();
  console.log(state.form)
  return (
    <>
      <Typography variant="overline" >
        Account Details
      </Typography>
      <List>
        <ListItem>
        <ListItemText
        primary={"Email"}
        secondary={<Typography style={{  }}>{state.form.email}</Typography>}
        />
        </ListItem>
      </List>
      <Typography variant="overline">
        Personal Information
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="First Name"
            secondary={<Typography style={{  }}>{state.form.firstname}</Typography>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Last Name"
            secondary={<Typography style={{  }}>{state.form.lastname}</Typography>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Phone Number"
            secondary={<Typography style={{  }}>+{state.form.phoneCode} - {state.form.phonenumber}</Typography>}
          />
        </ListItem>
      </List>
    </>
  )
}

export default ReviewInfo