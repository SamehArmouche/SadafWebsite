import * as React from 'react';
import {Grid, Fade, Typography } from '@mui/material';
import { fetchProjects } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux'
import Details from '../../components/shared/Details';
import ProjectCard from '../../components/ProjectCard';
import { useTranslation } from 'react-i18next';
import Loading from '../../components/Loading';
import colors from '../../assets/theme/colors';
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

  const handleChanglePage = (event, newPage) => {
  if(newPage){
    setActualPage(newPage);
  }

  };

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
          {
            projects?.slice((actualPage - 1) * maxPerPage,maxPerPage* actualPage).map((a,i)=>{
              return(<ProjectCard key={a.id} item={a} handleChange={handleChange}  i18n={i18n} i={i} />)
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
              <Grid sx={{flexDirection:'row',display:'flex',textAlign:i18n.dir()!=='ltr'?'right':'left',pr:3,pl:3,pb:0.5,pt:0.5}}>
              <Typography sx={{fontWeight:'bold',whiteSpace: "nowrap",overflow:'visible'}} >{t("project.type")}</Typography>
                <Typography sx={{ml:1,mr:1}} >{`${project[`type_${i18n.language}`]}`}</Typography>
              </Grid>

              <Grid sx={{flexDirection:'row',display:'flex',textAlign:i18n.dir()!=='ltr'?'right':'left',pr:3,pl:3,pb:0.5,pt:0.5}}>
              <Typography sx={{fontWeight:'bold',whiteSpace: "nowrap",overflow:'visible'}} >{t("project.author")}</Typography>
                <Typography sx={{ml:1,mr:1}}>{`${project[`author_${i18n.language}`]}`}</Typography>
              </Grid>

              <Grid sx={{flexDirection:'row',display:'flex',textAlign:i18n.dir()!=='ltr'?'right':'left',pr:3,pl:3,pb:0.5,pt:0.5}}>
              <Typography sx={{fontWeight:'bold',whiteSpace: "nowrap",overflow:'visible'}} >{t("project.actors")}</Typography>
                <Typography sx={{ml:1,mr:1}}>{`${project[`actors_${i18n.language}`]}`}</Typography>
              </Grid>

              <Grid sx={{flexDirection:'row',display:'flex',textAlign:i18n.dir()!=='ltr'?'right':'left',pr:3,pl:3,pb:0.5,pt:0.5}}>
                <Typography sx={{fontWeight:'bold',whiteSpace: "nowrap",overflow:'visible'}} >{t("project.client")}</Typography>
                <Typography sx={{ml:1,mr:1}}>{`${project[`client`]}`}</Typography>
              </Grid>

              <Grid sx={{flexDirection:'row',display:'flex',textAlign:i18n.dir()!=='ltr'?'right':'left',pr:3,pl:3,pb:0.5,pt:0.5}}>
                <Typography sx={{fontWeight:'bold',whiteSpace: "nowrap",overflow:'visible'}}>{t("project.year")}</Typography>
                <Typography sx={{ml:1,mr:1}}>{`${project[`year`]}`}</Typography>
              </Grid>
            </Grid>
          } 
            >
          </Details>
        }
        <Grid style={{display:'flex',width:'100%', justifyContent:'center', alignItems:'center'}}>
          <ToggleButtonGroup
            value={actualPage}
            exclusive
            onChange={handleChanglePage}
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
                            backgroundColor: colors.hover
                          },
                        }}
                        key={i}value={i+1} aria-label={`page ${i+1}`}>
                        {i+1}
                      </ToggleButton>);
                })
            }
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </Fade>
  );
}

export default Projects;