import * as React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Box, Button, CardActionArea, CardActions, Paper, Typography, CardMedia, CardContent, Card } from '@mui/material';
import { useTranslation } from 'react-i18next';
import colors from '../../assets/theme/colors/'
function MyCarousel({items})
{
    const { t, i18n } = useTranslation();

    const MyCard = (props) => {
      return (
        <Card sx={{maxWidth:500,borderRadius:2}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height={400}
              image={props.item.img}
              alt="service_img"
              sx={{borderRadius:2}}
            >
            </CardMedia>
            <Typography sx={{position:"absolute",bottom:-5,backgroundColor:colors.background,borderRadius:0,width:"100%"}} gutterBottom>
              <h2>{`${props.item[`title_${i18n.language}`]}`}</h2>
            </Typography>
          </CardActionArea>
        </Card>
      );
    }

    return (
      <Carousel animation={"fade"} sx={{
        width:400,height:400
        }}>
        {
          items.map( (item, i) => {
          
          return(
            <MyCard key={i} item={item} />
          )
          })
        }

      </Carousel>
    )
}



export default MyCarousel