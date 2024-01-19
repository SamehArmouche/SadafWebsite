import * as React from 'react';
import {Grid, Fade} from '@mui/material';
import { fetchProjects } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../components/Carousel';

function Projects() {
  const dispatch: Dispatch = useDispatch();
  const { projects } = useSelector(
    (state) => state.projects
  )

  React.useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',height:"75%",width:'100%'}}>
        <Carousel items={projects}/>
      </Grid>
    </Fade>
  );
}

export default Projects;