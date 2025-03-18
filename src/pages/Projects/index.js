import * as React from 'react';
import {Grid, Fade, Typography, Button } from '@mui/material';
import { fetchProjects } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux'
import Details from '../../components/Projects/Details';
import ProjectCard from '../../components/Projects/ProjectCard';
import { useTranslation } from 'react-i18next';
import Loading from '../../components/Loading';
import colors from '../../assets/theme/colors';


function Projects() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false)
  const [project, setProject] = React.useState({});
  const { i18n, t} = useTranslation();
  const [actualImg, setActualImg]= React.useState("");
  const { loadingProjects, projects } = useSelector(
    (state) => state.projects
  )

  const projectRefs = React.useRef([]); // Refs para los proyectos

  const handleChange = (value, index) => {
    setProject(value);
    setOpen(true);
    setActualImg(value.video_url)
  };

  const handleClose = (index) => {
    setOpen(false);
    setTimeout(() => {
      // Hacemos scroll al proyecto seleccionado
      projectRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
    // No necesito scroll al cerrar, ya lo manejamos en handleChange
  };

  const getRef = (event, i) =>{
    if(event){
      projectRefs.current[i] = event;
      return projectRefs.current[i]
    }
  }

  React.useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item xs={7} sx={{alignItems:'center',display:'flex',minHeight:'72vh', flexDirection:'column',pt:{md:5,xs:0}}}>

        <Grid container sx={{backgroundColor:'transparent',minWidth:300,justifyContent:'center'}}>
          <Typography sx={{fontSize:{md:35,xs:28},fontWeight:'bold',padding:2}}>{t('project.subtitle')}</Typography>              
        </Grid>
        {
          <Grid container sx={{justifyContent:'center'}}>
          {
          loadingProjects ? <Loading style={{color: colors.primary}}/>
          :
          <Grid container sx={{justifyContent:{md:'start',sm:'center',xs:'center'},alignItems:'center',pt:0,pb:0,maxWidth:"1150px"}}>
          {
            !open &&
            projects?.map((a,i)=>{

              return (
                <div ref={el => getRef(el, a.id)} key={a.id}>
                  <ProjectCard item={a} handleChange={() => handleChange(a, a.id)} t={t} i18n={i18n} i={i}  />
                </div>
              );
            })}
          </Grid>
          }
        </Grid>
        
        }
        <Grid container sx={{justifyContent:{md:'flex-start',sm:'center',xs:'center'},alignItems:'center',pt:0,pb:5,maxWidth:"1150px"}}>
          {
          open && 
          <Details open={open}   handleClose={() => handleClose(project['id'])}
          title={`${project[`title_${i18n.language}`]}`}
          description={`${project[`description_${i18n.language}`]}`}
          category={`${project[`category_${i18n.language}`]}`}
          img={actualImg}
          fullScreen={true}
          client_url={project['client_url']}
          client_logo_url={project['client_logo_url']}
          t={t}
          i18n={i18n}
          children2={
            <Grid sx={{justifyContent:'flex-start', display:'flex',flexDirection:'column'}}>
              <Grid sx={{flexDirection:'row',display:'flex',textAlign:i18n.dir()!=='ltr'?'right':'left',pr:3,pl:3,pb:0.5,pt:0.5}}>
              <Typography sx={{fontWeight:'bold',whiteSpace: "nowrap",overflow:'visible',color:'white'}} >{t("project.directors")}</Typography>
              <Typography sx={{ml:1,mr:1,color:'white'}}>{`${project[`directors_${i18n.language}`]}`}</Typography>
              </Grid>

              <Grid sx={{flexDirection:'row',display:'flex',textAlign:i18n.dir()!=='ltr'?'right':'left',pr:3,pl:3,pb:0.5,pt:0.5}}>
              <Typography sx={{fontWeight:'bold',whiteSpace: "nowrap",overflow:'visible',color:'white'}} >{t("project.author")}</Typography>
                <Typography sx={{ml:1,mr:1,color:'white'}}>{`${project[`author_${i18n.language}`]}`}</Typography>
              </Grid>

              <Grid sx={{flexDirection:'row',display:'flex',textAlign:i18n.dir()!=='ltr'?'right':'left',pr:3,pl:3,pb:0.5,pt:0.5}}>
              <Typography sx={{fontWeight:'bold',whiteSpace: "nowrap",overflow:'visible',color:'white'}} >{t("project.actors")}</Typography>
                <Typography sx={{ml:1,mr:1,color:'white'}}>{`${project[`actors_${i18n.language}`]}`}</Typography>
              </Grid>
              <Grid sx={{flexDirection:'row',display:'flex',textAlign:i18n.dir()!=='ltr'?'right':'left',pr:3,pl:3,pb:0.5,pt:0.5}}>
                <Typography sx={{color:'white',mb:1}}>{`${project[`year`]}`}</Typography>
              </Grid>
            </Grid>
          } 
            >
          </Details>
         
        }
 </Grid>

      </Grid>
    </Fade>
  );
}

export default Projects;