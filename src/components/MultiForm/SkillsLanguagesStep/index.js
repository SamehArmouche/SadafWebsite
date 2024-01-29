import {
  Grid,
  Fade,
  Typography
} from "@mui/material";

import Category from '../../Category'
import { useLocation } from 'react-router-dom'
const categories = [
  "Actor",
  "Scriptwriter",
  "Montage",
  "Photography",
  "TV Director",
  "Music",
  "Model",
  "VFX graphics",
  "Interior design",
  "Other"
]

const SkillsLanguagesStep = ({
  handleSubmit
}) => {

  const { state } = useLocation();
  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid
        container
        sx={{
          height:'100%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
        }}>
          <Typography>
            SkillsLanguagesStep
          </Typography>
      </Grid>
    </Fade>
  )
}

export default SkillsLanguagesStep