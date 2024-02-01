import * as React from 'react';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import colors from '../../../../assets/theme/colors/'
import { useLocation } from 'react-router-dom'
import {
  FormControl,
  InputLabel,
  Select,
  Box,
  MenuItem,
  TextField
} from "@mui/material";
const TikTokIcon = () => {
  return (
    <svg
      fill={colors.primary}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={32}
      style={{marginRight:7}}
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

const TYPES = [
  {value:'Twitter',icon:<XIcon sx={{mr:1}}/>},
  {value:'Facebook',icon:<FacebookIcon sx={{mr:1}}/>},
  {value:'Instagram',icon:<InstagramIcon sx={{mr:1}}/>},
  {value:'Tiktok',icon:<TikTokIcon sx={{mr:1}}/>},
  {value:'Youtube',icon:<YouTubeIcon sx={{mr:1}}/>},
  {value:'Other',icon:<HelpCenterIcon sx={{mr:1}}/>},
];




export default function SocialNetworksList({label}) {
  const { state } = useLocation();
  const [fruitsInBasket, setFruitsInBasket] = React.useState([]);
  const availbleOptions = () =>{
    return TYPES.filter(function(e) {
      return fruitsInBasket.indexOf(e) < 0;
    })
  }
  const handleRemoveFruit = (item) => {
    setFruitsInBasket((prev) => [...prev.filter((i) => i.value !== item)]);
  };

  const handleAddFruit = (value) => {
    setFruitsInBasket((prev) => [ ...prev, value]);
  };

  const renderItem = ({ item, handleRemoveFruit, i }) => {
    return (
  
      <ListItem
        sx={{direction:'rtl',backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1,width:300,justifyContent:'center'}}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            title="Delete"
            onClick={() => handleRemoveFruit(item.value)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <TextField id="filled-basic" label={"Link"} variant="filled"
          inputProps={{ style: { color: colors.primary }}}
          //value={value || ''}
          
          //error={handleError("companyName")}
          onChange={(e) => {state.form['links'] = {...state.form['links'],[item.value]:e.target.value}}}
          //sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1,m:1,height:55,maxwidth:300, direction:'ltr',width:{xs:300,md:150}}}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.2)',borderRadius:1,height:55,width:260, direction:"ltr"}}
          autoComplete='nope'
        />
        {item.icon}
      </ListItem>
    );
  }

  const addFruitButton = (
    <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:300}}} >
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        sx={{backgroundColor: "rgba(247, 216, 159, 0.1)",
          ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select": {
            color: colors.primary,
          },
          ".css-m7y6qn-MuiSvgIcon-root-MuiSelect-icon":{
            color: colors.primary,
          }
        }}
        value={''}
        disabled={fruitsInBasket.length >= TYPES.length}
        onChange={(e)=>handleAddFruit(e.target.value)}>
          {
            availbleOptions().map((o)=>{
              return <MenuItem key={o.value} value={o}>{o.value}</MenuItem>
            })
          }
      </Select>
    </FormControl>
  );

  
  return (
    <div>
      {addFruitButton}
      <List sx={{justifyContent:'center',display:'flex'}}>
        <TransitionGroup>
          {fruitsInBasket.map((item, i) => {
            return (
            <Fade key={i}>{renderItem({ item, handleRemoveFruit,i })}</Fade>
            )})}
        </TransitionGroup>
      </List>
    </div>
  );
}