import React, { useRef, useState, useEffect } from 'react';
import { Grow, Grid, Typography } from '@mui/material';
import { useIsVisible } from '../../helpers/usIsInvisible';
import { ArrowForwardIos, ArrowBackIosNew } from '@mui/icons-material';

const TopTen = ({ items, direction = 'ltr' }) => {
  const listaRef = useRef(null);
  const isVisible = useIsVisible(listaRef);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [loadingStates, setLoadingStates] = useState(
    Array(items.length).fill(true)
  );

  const handleScroll = () => {
    if (listaRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listaRef.current;
      if (direction === 'ltr') {
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth);
      } else {
        if (scrollWidth - clientWidth === -scrollLeft) {
          setShowLeftButton(false);
        } else {
          setShowLeftButton(scrollLeft < scrollWidth - clientWidth);
        }
        setShowRightButton(scrollLeft < 0); // Ajustamos la lógica para `rtl`
      }
    }
  };

  useEffect(() => {
    const lista = listaRef.current;
    lista.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      lista.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, direction]);

  const desplazarPorDosElementos = (direccion) => {
    if (listaRef.current) {
      const elementoAncho = 220; // Ancho de cada elemento
      const desplazamiento = elementoAncho * 2;
      listaRef.current.scrollTo({
        left: listaRef.current.scrollLeft + direccion * desplazamiento,
        behavior: 'smooth',
      });
    }
  };

  const handleImageLoad = (index) => {

    setLoadingStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });

  };

  return (
    <div className="container">
      <Grid
        sx={{
          '&:hover': {
            opacity: showLeftButton ? 1 : 0,
          },
          opacity: showLeftButton ? 0.8 : 0,
          height: { md: 180, xs: 120 },
          width: { md: 30, xs: 20 },
          fontSize: { md: 30, xs: 20 },
        }}
        className={`boton boton-izquierda ${showLeftButton ? '' : 'oculto'}`}
        onClick={() => desplazarPorDosElementos(-1)}
      >
        <ArrowBackIosNew sx={{ color: 'white' }} />
      </Grid>
      <Grid
        className="lista-horizontal"
        sx={{
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          width: { md: '97% !important', xs: '92% !important' },
        }}
        ref={listaRef}
      >
        {isVisible &&
          items &&
          items.map((p, i) => (
            <Grow
              mountOnEnter
              unmountOnExit
              in={true}
              style={{ transformOrigin: '0 0 0' }}
              {...{ timeout: i * 500 }}
              key={i}
            >
              <Grid
                sx={{
                  flex: '0 0 auto',
                  width: { md: '220px', xs: '150px' },
                  padding: '17px',
                }}
              >
                <Grid
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                    textAlign: 'center',
                    borderRadius: 8,
                    overflow: 'visible',
                  }}
                >
                  <div className="gradient-overlay"></div>
                  {loadingStates[i] && (
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '220px',
                        top: '50%',
                        borderRadius:8,
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        backgroundColor:'black',
                      }}
                    >
                      Cargando...
                    </div>
                  )}
                  <img
                    src={p.img}
                    alt="img-project"
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: 8,
                      display: loadingStates[i] ? 'none' : 'block',
                    }}
                    onLoad={() => handleImageLoad(i)}
                  />
                  <Typography
                    noWrap
                    sx={{
                      display: loadingStates[i] ? 'none' : 'block',
                      fontSize: { md: 90, xs: 50 },
                      position: 'absolute',
                      top: { md: '85%', xs: '85%' },
                      left: { md: '0%', xs: '0%' },
                      transform: 'translate(-50%, -50%)',
                      color: 'white',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      color: 'black',
                      WebkitTextStroke: '0.06rem rgba(255,255,255,1)',
                      textShadow: '0 0 1.5rem rgba(0,0,0,1)',
                    }}
                  >
                    {i + 1}
                  </Typography>
                </Grid>
              </Grid>
            </Grow>
          ))}
      </Grid>
      <Grid
        className={`boton boton-derecha ${showRightButton ? '' : 'oculto'}`}
        sx={{
          '&:hover': {
            opacity: showRightButton ? 1 : 0,
          },
          direction: direction,
          opacity: showRightButton ? 0.8 : 0,
          height: { md: 180, xs: 120 },
          width: { md: 30, xs: 20 },
          fontSize: { md: 30, xs: 20 },
        }}
        onClick={() => desplazarPorDosElementos(1)}
      >
        <ArrowForwardIos sx={{ color: 'white' }} />
      </Grid>
    </div>
  );
};

export default TopTen;
