import { Grow, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { useIsVisible } from '../../helpers/usIsInvisible';

const TopFive = ({ items }) => {
  const ref = React.useRef();
  const isVisible = useIsVisible(ref);

  return (
    <Grid container ref={ref}
      sx={{
        width: '100%', pb: 6, flexDirection: 'row',
        alignItems: 'center', justifyContent: { md: 'space-between', xs: 'center' }
      }}>
      {
        isVisible && items && items.slice(0, 5).map((p, i) => {
          return (
            <Grow
              mountOnEnter
              unmountOnExit
              in={true}
              style={{ transformOrigin: '0 0 0' }}
              {...{ timeout: (i * 500) }}
              key={i}>
              <Grid sx={{ justifyContent: 'center', display: 'flex', p: {md:1,xs:2} ,width:{md:200,xs:130},height:{md:300,xs:180}}}>
                <Grid container
                  sx={{
                    position: 'relative', // Contenedor relativo
                    //height: { md: "160px", xs: "100px" },
                    //width: { md: "130px", xs: "80px" },
                    width:'100%',
                    height:'100%',
                    backgroundColor: 'black',
                    textAlign: 'center',
                    borderRadius:8,
                    overflow: 'visible', // Permitir desbordamiento visible
                  }}
                >
                  <div className="gradient-overlay"></div>
                  <img
                   src={p.img}
                    alt="img-project"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: 'cover',
                      borderRadius:8
                    }}
                  />
                  <Typography
                    noWrap
                    sx={{
                      //fontSize: '6.25rem',
                      fontSize: {md:90,xs:50},
                      //fontWeight:'bold',
                      position: 'absolute', // Posicionamiento absoluto
                      top: {md:'85%',xs:'85%'}, // Ajustar para desbordar
                      left: {md:'0%',xs:'0%'},
                      transform: 'translate(-50%, -50%)', // Ajuste para que sobresalga
                      color: 'white',
                      display: 'flex',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      color: "black",
                      WebkitTextStroke: "0.06rem rgba(255,255,255,1)",
                      textShadow: "0 0 1.5rem rgba(0,0,0,1)",
                    }}
                  >
                    {i + 1}
                  </Typography>
                </Grid>
              </Grid>
            </Grow>
          )
        })
      }
    </Grid>
  )
}

export default TopFive;
