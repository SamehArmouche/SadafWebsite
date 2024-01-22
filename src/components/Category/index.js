import {
  Grid,
  Box,
  Typography
} from "@mui/material";

const Category = ({handleSubmit, title, key, i}) => {
  return (
    <Box
      sx={{
        m:1,
        //height:{md:200},
        display:'flex',
        alignItems:{md:(i%2!=0?'end':'start'),xs:"center"}
      
      }}
    >
    <Grid
      sx={{
        width:{xs:75,md:130},
        height:{xs:75,md:130},
        borderRadius:20,
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
        {title}
      </Typography>
    </Grid>
    </Box>
  )
}

export default Category