import React, { useRef, useState, useEffect } from 'react';
import { Grow, Grid, Typography } from '@mui/material';
import { useIsVisible } from '../../helpers/usIsInvisible';

const TopTen = ({items}) => {
  const listaRef = useRef(null);
  const isVisible = useIsVisible(listaRef);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = () => {
    if (listaRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listaRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const lista = listaRef.current;
    lista.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      lista.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  const desplazarAlPrincipio = () => {
    if (listaRef.current) {
      listaRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  // Modificamos esta función para desplazarnos por dos elementos
  const desplazarPorTresElementos = () => {
    if (listaRef.current) {
      if(window.innerWidth >= 960){
        listaRef.current.scrollTo({ left: listaRef.current.scrollWidth, behavior: 'smooth' });
      }else{
        const elementoAncho = 148; // Determina el ancho según el tamaño de la pantalla (md o xs)
        const desplazamiento = listaRef.current.scrollLeft + elementoAncho * 2;
        listaRef.current.scrollTo({ left: desplazamiento, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="container">
      <Grid 
        sx={{height:{md:180,xs:120},width:{md:30,xs:20}, fontSize:{md:30,xs:20}}}
        className={`boton boton-izquierda ${showLeftButton ? '' : 'oculto'}`} 
        onClick={desplazarAlPrincipio}
      >
        {"<"}
      </Grid>
      <Grid className="lista-horizontal" sx={{
                  scrollbarWidth: 'none',
                  '&::-webkit-scrollbar': { display: 'none' },
                  width:{md:"100%",xs:'90%'}
      }} ref={listaRef}>
{
        isVisible && items && items.map((p, i) => {
          return (
            <Grow
              mountOnEnter
              unmountOnExit
              in={true}
              style={{ transformOrigin: '0 0 0' }}
              {...{ timeout: (i * 500) }}
              key={i}>
                
              <Grid sx ={{
                  flex: "0 0 auto",
                  width: {md:"220px",xs:'150px'},
                  padding: "17px",
              }}>
                <Grid 
                  sx={{
                    position: 'relative',
                    width:'100%',
                    height:'100%',
                    backgroundColor: 'black',
                    textAlign: 'center',
                    borderRadius:8,
                    overflow: 'visible',
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
                      fontSize: {md:90,xs:50},
                      position: 'absolute',
                      top: {md:'85%',xs:'85%'},
                      left: {md:'0%',xs:'0%'},
                      transform: 'translate(-50%, -50%)',
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
        <Grid 
          className={`boton boton-derecha ${showRightButton ? '' : 'oculto'}`}
          sx={{height:{md:180,xs:120},width:{md:30,xs:20}, fontSize:{md:30,xs:20}}}
          onClick={desplazarPorTresElementos}
        >
          {">"}
        </Grid>
    </div>
  );
};

export default TopTen;
