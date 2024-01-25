import * as React from 'react';
import {Grid, Fade} from '@mui/material';
import { fetchProjects } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../components/Carousel';
import Details from '../../components/shared/Details';
import { useTranslation } from 'react-i18next';

function Projects() {
  const dispatch: Dispatch = useDispatch();
  const [open, setOpen] = React.useState(false)
  const [project, setProject] = React.useState({});
  const { i18n } = useTranslation();
  const { projects } = useSelector(
    (state) => state.projects
  )
  const handleChange = (value) => {
    setProject(value)
    setOpen(!open)
 }

  React.useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',minHeight:'72vh',width:'100%'}}>
      <Carousel items={projects} onClick={()=>setOpen(!open)} handleChange={handleChange} />
        <Details open={open} handleClose={()=> setOpen(!open)} 
          title={`${project[`title_${i18n.language}`]}`}
          description={`${project[`description_${i18n.language}`]}`}
          img={`${project["img"]}`}
        />
      </Grid>
    </Fade>
  );
}

export default Projects;