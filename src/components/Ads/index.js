import React, { useRef, useState } from 'react';
import { Box, Grid } from '@mui/material';

const images = [
  { img: "https://variety.com/wp-content/uploads/2020/05/netflix-logo.png",
    url:"https://www.netflix.com/"
  },
  { img: "https://static.s3.shahid.mbc.net/rebranding/promo/src/images/ogimage-black.jpg",
     url:"https://shahid.mbc.net/"
   },
  { img: "https://www.thehandbook.com/cdn-cgi/image/width=300,height=300,fit=cover,q=80,format=webp/https://files.thehandbook.com/uploads/2021/02/aauvwng9jzwu3kefl54jzi2n8qbgck12nqcdfgvckejasqs800-c-k-c0x00ffffff-no-rj.jpg",
     url:"https://aj-production.com/"
  },
  { img: "https://vid.alarabiya.net/images/2023/01/29/6c5bb09c-ac03-4208-aaad-5dca112f8fa1/6c5bb09c-ac03-4208-aaad-5dca112f8fa1.jpg?crop=4:3&width=1200",
     url:""
  },
  { img: "https://argaamplus.s3.amazonaws.com/6a34dc31-fd85-4d73-8643-8575aae16f12.png",
     url:""
  }
];

const Ads = ({ i18n, t }) => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta la velocidad de desplazamiento
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const openUrl = (url) =>{
    if(url){
      window.open(url, '_blank').focus()
    }
  }

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0,0,0,0)',
        display: 'flex', alignItems: "center", width: '100%',
        m: 0, borderRadius: {md:10,xs:5},
        justifyContent: 'center',
      }}
    >
      <Grid
        ref={carouselRef}
        sx={{
          overflowX: 'auto', cursor: 'grab',borderRadius: {md:10,xs:5}, display: 'flex', flexDirection: 'row',
          minHeight: 100, alignItems: 'center', backgroundColor: 'rgba(10, 10, 10, 0)',
          '&:active': { cursor: 'grabbing' }
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        {images.map((i, e) => (
          <Grid key={e}
            sx={{
              backdropFilter: "blur(10px)",
              backgroundColor:'rgba(0,0,0,0.2)',
              m: 2, borderRadius: {md:10,xs:5}, display: 'flex', height: '100%',
              boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.7)',
              position: 'relative' // Asegúrate de que el Grid sea relativo para posicionar el overlay.
            }}
          >
            <Box
              onClick= {()=> openUrl(i.url)} 
              component="img"
              sx={{
                height: { md: "450px", xs: "200px" },
                width: { md: "315px", xs: "130px" },
                objectFit:'cover',
                borderRadius: 10,
                content: {
                  xs: `url(${i.img})`, //img src from xs up to md
                  md: `url(${i.img})`,  //img src from md and up
                }
              }}
              alt="Ads"
            />
            <Box 
              sx={{
                // Overlay con gradiente lineal.
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
                borderRadius: 10,
                //background: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)',
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Ads;
