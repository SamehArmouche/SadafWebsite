import {
  Grid,
  Box,
  Typography
} from "@mui/material";


const categories = [
  "Actor",
  "Scriptwriter",
  "Montage",
  "Photography",
  "TV Director",
  "Music",
  "Model",
  "VFX graphics",
  "Interior design"
]

const AccountDetails = ({
  handleSubmit
}) => {

  return (
    <Grid
      container
      sx={{
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        {
         categories.map((c)=>{
          return (
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
              key={c}
              onClick={()=>handleSubmit("cateogry",c)}
              >
                <Typography sx={{fontSize:{xs:13,md:18}}}>
                  {c}
                </Typography>
              </Grid>
            )
          })
        }
    
    </Grid>
  )
}

export default AccountDetails