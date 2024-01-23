import {
  Grid,
  Box,
  Typography
} from "@mui/material";
import { useTranslation } from 'react-i18next';

const Category = ({handleSubmit, title, key, i}) => {
  const { t, i18n } = useTranslation();
  return (
    <Box
      sx={{
        m:1,
        display:'flex',
        alignItems:{md:(i%2!=0?'end':'start'),xs:"center"}
      
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
      key={key}
      onClick={()=>handleSubmit("cateogry",title)}
      >
      <Typography sx={{fontSize:{xs:13,md:18}}}>
      {t(`talent.stepper.category.types.${title.replaceAll(" ","")}`)}
      </Typography>
    </Grid>
    </Box>
  )
}

export default Category