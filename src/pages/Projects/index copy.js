import * as React from 'react';
import {Grid, Fade, Typography } from '@mui/material';
import { fetchProjects } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../components/Carousel';
import Details from '../../components/shared/Details';
import { useTranslation } from 'react-i18next';
import Ads from '../../components/Ads';

function Projects() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false)
  const [project, setProject] = React.useState({});
  const { i18n, t} = useTranslation();
  const [actualImg, setActualImg]= React.useState("");
  const [images, setImages]= React.useState([]);
  const { projects } = useSelector(
    (state) => state.projects
  )
  const handleChange = (value) => {
    setImages([{img:value.img},{img:value.img_url1},{img:value.img_url2},{img:value.img_url3}]);
    setActualImg(value.img)
    setProject(value)
    setOpen(!open)
 }

  React.useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',minHeight:'72vh',width:'80%', flexDirection:'column'}}>
      <Carousel items={projects} onClick={()=>setOpen(!open)} handleChange={handleChange} />
        <Details open={open} handleClose={()=> setOpen(!open)} 
          title={`${project[`title_${i18n.language}`]}`}
          description={`${project[`description_${i18n.language}`]}`}
          img={actualImg}
          children2={
            <Grid sx={{justifyContent:'flex-start', display:'flex',flexDirection:'column'}}>
              <Typography sx={{textAlign:i18n.dir()!=='ltr'?'right':'left',pr:1,pl:1,pb:0.5,pt:0.5}} >{t("project.type")}{`${project[`type_${i18n.language}`]}`}</Typography>
              <Typography sx={{textAlign:i18n.dir()!=='ltr'?'right':'left',pr:1,pl:1,pb:0.5,pt:0.5}} >{t("project.author")}{`${project[`author_${i18n.language}`]}`}</Typography>
              <Typography sx={{textAlign:i18n.dir()!=='ltr'?'right':'left',pr:1,pl:1,pb:0.5,pt:0.5}} >{t("project.actors")}{`${project[`actors_${i18n.language}`]}`}</Typography>
              <Typography sx={{textAlign:i18n.dir()!=='ltr'?'right':'left',pr:1,pl:1,pb:0.5,pt:0.5}} >{t("project.client")}{`${project["client"]}`}</Typography>
              <Typography sx={{textAlign:i18n.dir()!=='ltr'?'right':'left',pr:1,pl:1,pb:0.5,pt:0.5}} >{t("project.year")}{`${project["year"]}`}</Typography>
            </Grid>
          } 
            >
              
            
            {<Grid sx={{ overflowY: 'scroll',display:'flex',flexDirection:'row',minHeight:100,alignItems:'center',backgroundColor:'rgba(10, 10, 10, 0.55)'}} >
              {
                
                images.map((i,e)=>{
                  if(i.img!==null && i.img!=='' && i.img!==undefined){
                    return (
                      <Grid key = {e} 
                      sx={{mr:2,ml:2,backgroundColor:'grey',borderRadius:2,display:'flex',height:'100%',
                      boxShadow: i.img===actualImg?'0px 0px 9px #f7d89f':'none',
                    }}
                        onClick={()=> {
                          setActualImg(i.img)
                        }}
                      >
                      <img
                        src={i.img}
                        alt={"alt"}
                        className={"img-sub"}
        
                      >
                      </img>
                      </Grid>
                    )
                  }
                  return null;
                })
              }
            </Grid>}
          </Details>
          {/*
          <Grid container sx={{justifyContent:'center', display:'flex'}}>
            <Ads t={t} i18n={i18n} cat={'Comedy'}/>
            <Ads t={t} i18n={i18n} cat={'Drama'}/>
          </Grid>
          
          */}

      </Grid>
    </Fade>
  );
}

export default Projects;