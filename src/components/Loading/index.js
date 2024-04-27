import { Box, LinearProgress } from '@mui/material';
import * as React from 'react';

const Loading = () => {


  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 100;
        const diff2 = Math.random() * 100;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{justifyContent:'center',alignItems:'center',display:'flex'}} maxHeight="false">
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{width:300}}/>
    </Box>
  )
}

export default Loading