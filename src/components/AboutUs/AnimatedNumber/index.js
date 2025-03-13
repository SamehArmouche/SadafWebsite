import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';

// const AnimatedDigit = ({ targetDigit }) => {
//     const [currentDigit, setCurrentDigit] = useState(0);
  
//     useEffect(() => {
//       let startDigit = 0;
//       const interval = setInterval(() => {
//         startDigit += 1;
//         setCurrentDigit(startDigit);
  
//         if (startDigit >= targetDigit) {
//           clearInterval(interval);
//         }
//       }, 100); // Ajusta la velocidad de la animación
  
//       return () => clearInterval(interval); // Limpieza del intervalo
//     }, [targetDigit]);
  
//     return <div className="animated-digit">{currentDigit}</div>;
//   };


// const AnimatedNumber = ({ index, style }) => {
//     const digits = String(index).split('').map(Number);
  
//     return (
//     //   <div className="animated-number-container">
//     //     {digits.map((digit, i) => (
//     //       <AnimatedDigit key={i} targetDigit={digit} />
//     //     ))}
//     //   </div>

//         <Grid className="animated-number" sx={{
//             width:'100%',
//             height:'100%',
//             fontWeight:'bold',
//             justifyContent:'center',
//             ...style
//           }}>{digits.map((num, i) => (
//             <AnimatedDigit key={i} targetDigit ={num}sx={{}}></AnimatedDigit>
//           ))}</Grid>
//     );
//   };
  


const AnimatedNumber = ({ index, style }) => {
  const [currentNumbers, setCurrentNumbers] = useState(Array.from(String(index), () => ""));

  useEffect(() => {
    const intervals = [];
    const targetNumbers = String(index).split('').map(Number);

    targetNumbers.forEach((targetDigit, i) => {
      let startDigit = 0;

      const interval = setInterval(() => {
        setCurrentNumbers((prevNumbers) => {
          const newNumbers = [...prevNumbers];
          newNumbers[i] = Math.min(startDigit, targetDigit); // Asegura que no exceda el dígito objetivo
          return newNumbers;
        });

        if (startDigit >= targetDigit) {
          clearInterval(interval);
        } else {
          startDigit += 1;
        }
      }, 60);

      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, [index]);

  return (
    <Grid
      className="animated-number"
      sx={{
        width: '100%',
        height: '100%',
        fontWeight: 'bold',
        justifyContent: 'center',
        m: 0,
        p: 0,
        ...style,
      }}
    >
      {currentNumbers.map((num, i) => (
        <Grid key={i} sx={{}}>
          {num}
        </Grid>
      ))}
    </Grid>
  );
};

export default AnimatedNumber;
