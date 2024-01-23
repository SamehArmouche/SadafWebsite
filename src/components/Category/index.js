import {
  Grid,
  Box,
  Typography
} from "@mui/material";
import { useTranslation } from 'react-i18next';
import colors from '../../assets/theme/colors/'
const Category = ({handleSubmit, title, i, currentCat}) => {
  const { t } = useTranslation();
  
  return (
    <Box
      sx={{
        m:1,
        display:'flex',
        alignItems:{md:(i%2!==0?'end':'start'),xs:"center"},
        ".css-60kf82-MuiGrid-root": {
          backgroundColor: currentCat===title?colors.secondary:"inheret",
        },
      }}
    >
    <Grid
      sx={{
        width:{xs:75,md:130},
        height:{xs:75,md:130},
        borderRadius:2,
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        m:1,
        bgcolor: 'primary.main',
        '&:hover': {
          bgcolor: 'primary.dark',
        },
      }}
      onClick={()=>handleSubmit("category",title)}
      >
      <Typography sx={{fontSize:{xs:13,md:18},color: currentCat===title?"black":"inheret",}}>
      {t(`talent.stepper.category.types.${title.replaceAll(" ","")}`)}
      </Typography>
    </Grid>
    </Box>
  )
}

export default Category