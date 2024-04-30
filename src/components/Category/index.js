import {
  Grid,
  Box,
  Typography
} from "@mui/material";
import { useTranslation } from 'react-i18next';
import colors from '../../assets/theme/colors/'
import DataSelect from './DataSelect'

const Category = ({handleSubmit, title, i, currentCat, sub, handleChange}) => {
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
        p:sub.length===0?1:0,
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        m:1,
        bgcolor: currentCat===title?colors.secondary:colors.hover,
        '&:hover': {
          bgcolor: 'primary.dark',
        },
      }}
      onClick={()=> {if(sub.length===0) handleSubmit("category",title)}}
      >
      {
        sub.length!==0 ?
        <DataSelect  
        label={title.replaceAll(" ","")}
        noneItem={t('talent.stepper.buttons.none')}
        value={sub.find( (c) => c.key===currentCat)?currentCat:''}
        backgroundColor={sub.find( (c) => c.key===currentCat)?colors.secondary:'transparent'}
        options={sub}
        onChange={(e)=>handleSubmit("category",e.target.value)}
        t={t}
      />
      : 
        <Typography sx={{fontSize:{xs:13,md:18},color: currentCat===title?"black":"inheret",}}>
        {t(`talent.stepper.category.types.${title.replaceAll(" ","")}.title`)}
        </Typography>
      }

    </Grid>
    </Box>
  )
}

export default Category

/**
 *       <Typography sx={{fontSize:{xs:13,md:18},color: currentCat===title?"black":"inheret",}}>
      {t(`talent.stepper.category.types.${title.replaceAll(" ","")}`)}
      </Typography>
 */