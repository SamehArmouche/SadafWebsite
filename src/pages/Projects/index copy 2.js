import * as React from 'react';
import {Grid, Fade, Typography, Button } from '@mui/material';
import { fetchProjects } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux'
import Details from '../../components/shared/Details';
import ProjectCard from '../../components/ProjectCard';
import { useTranslation } from 'react-i18next';
import Loading from '../../components/Loading';
import colors from '../../assets/theme/colors';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Projects() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false)
  const [project, setProject] = React.useState({});
  const { i18n, t} = useTranslation();
  const [actualImg, setActualImg]= React.useState("");
  const maxPerPage = 12;
  const [actualPage, setActualPage]= React.useState(1);
  const { loadingProjects, projects } = useSelector(
    (state) => state.projects
  )
  const [alignment, setAlignment] = React.useState(1);

  const handleAlignment = (event, newAlignment) => {
  if(newAlignment){
    setAlignment(newAlignment);
    setActualPage(newAlignment);
  }

  };
  
  const changePage =  (value) =>{
    if(value>0){
      if(Math.ceil(projects.length/maxPerPage)> actualPage){
        setActualPage(prev => prev + value);
      }
    }else{
      if(actualPage>1){
        setActualPage(prev => prev + value);
      }
    }

    //setActualPage(prev => prev + 1);
    
  }

  const handleChange = (value) => {
    setActualImg(value.img)
    setProject(value)
    setOpen(!open)
 }

  React.useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item xs={7} sx={{justifyContent:'center',alignItems:'center',display:'flex',minHeight:'72vh',width:'80%', flexDirection:'column',pt:10}}>

      <Grid container sx={{maxWidth:1000,justifyContent:'center', height:'100%'}}>
    {
      loadingProjects ? <Loading style={{color: colors.primary}}/>
      :
      <Grid container sx={{maxWidth:1000,justifyContent:'center',alignItems:'center'}}>
      {projects?.slice((actualPage - 1) * maxPerPage,maxPerPage* actualPage).map((a,i)=>{

        
        return(
          <ProjectCard key={a.id} item={a} handleChange={handleChange}  i18n={i18n} i={i} />
          )
        })}
        </Grid>
      }
      </Grid>
      {
        open && 
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
        </Details>
      }
          

          <Grid style={{display:'flex',width:'100%', justifyContent:'center', alignItems:'center'}}>

          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{mt:2,flexWrap: "wrap",backgroundColor:'transparent',borderRadius:0,diplay:'flex',
              justifyContent:'center'
            }}
          >
          {
            [...Array(Math.ceil(projects.length/maxPerPage)).keys()].reverse().map((a,i)=>{
              return( 
                    <ToggleButton 
                      sx={{
                        width:40,
                        height:40,
                        borderRadius:2,
                        color:colors.primary,
                        "&.MuiToggleButton-root.Mui-selected": {
                          borderRadius:2,
                          color:colors.primary,
                          fontWeight:'bold',
                          backgroundColor: colors.hover, //use the color you want
                        },
                      }}
                      key={i}value={i+1} aria-label="left aligned">
                      {i+1}
                    </ToggleButton>
              );
            })
            }

          </ToggleButtonGroup>
          </Grid>

      </Grid>
    </Fade>
  );
}

export default Projects;