import React, { useRef, useState } from 'react';
import { Box, Grid } from '@mui/material';

const images = [
  { img: "https://variety.com/wp-content/uploads/2020/05/netflix-logo.png" },
  { img: "https://static.s3.shahid.mbc.net/rebranding/promo/src/images/ogimage-black.jpg" },
  { img: "https://www.thehandbook.com/cdn-cgi/image/width=300,height=300,fit=cover,q=80,format=webp/https://files.thehandbook.com/uploads/2021/02/aauvwng9jzwu3kefl54jzi2n8qbgck12nqcdfgvckejasqs800-c-k-c0x00ffffff-no-rj.jpg" },
  { img: "https://vid.alarabiya.net/images/2023/01/29/6c5bb09c-ac03-4208-aaad-5dca112f8fa1/6c5bb09c-ac03-4208-aaad-5dca112f8fa1.jpg?crop=4:3&width=1200" },
  { img: "https://argaamplus.s3.amazonaws.com/6a34dc31-fd85-4d73-8643-8575aae16f12.png" }
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

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0,0,0,0)',
        display: 'flex', alignItems: "center", width: '100%',
        m: 0, borderRadius: 2,
        justifyContent: 'center',
      }}
    >
      <Grid
        ref={carouselRef}
        sx={{
          overflowX: 'auto', cursor: 'grab', display: 'flex', flexDirection: 'row',
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
              m: 2, backgroundColor: 'grey', borderRadius: 2, display: 'flex', height: '100%',
              boxShadow: '0px 0px 9px rgba(247, 216, 159, 0.1)',
            }}
          >
            <Box
              component="img"
              className={"img-sub"}
              sx={{
                height: { md: "350px", xs: "150px" },
                width: { md: "215px", xs: "90px" },
                objectFit:'cover',
                content: {
                  xs: `url(${i.img})`, //img src from xs up to md
                  md: `url(${i.img})`,  //img src from md and up
                }
              }}
              alt="Ads"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Ads;
