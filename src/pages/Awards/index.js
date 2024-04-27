import * as React from 'react';
import {Grid} from '@mui/material';
import { fetchAwards } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux'
import Details from '../../components/shared/Details';
import MyCard from '../../components/MyCard';
import { useTranslation } from 'react-i18next';
import colors from '../../assets/theme/colors';
import Loading from '../../components/Loading'


function Awards() {
  const dispatch: Dispatch = useDispatch();
  const [open, setOpen] = React.useState(false)
  const [award, setAward] = React.useState({});
  const { i18n } = useTranslation();
  const { awards, loadingAwards } = useSelector(
    (state) => state.awards
  )
  const handleChange = (value) => {
    setAward(value)
    setOpen(!open)
 }

  React.useEffect(() => {
    dispatch(fetchAwards());
  }, [dispatch]);


  return (
  <Grid container sx={{p:6,justifyContent:'center',alignItems:'center',display:'flex',minHeight:'72vh',maxWidth:'100%'}}>

    <Grid container sx={{maxWidth:1000,justifyContent:'center'}}>
    {
      loadingAwards ? <Loading style={{color: colors.primary}}/>
      :
      <Grid container sx={{maxWidth:1000,justifyContent:'center'}}>
      {awards?.map((a,i)=>{
        return(
          <MyCard key={a.id} handleChange={handleChange} alt={"award"} item = {a} i={i} i18n={i18n} />
          )
        })}
        </Grid>
      }
      </Grid>
      {
        open && 
        <Details open={open} handleClose={()=> setOpen(!open)} 
        title={`${award[`title_${i18n.language}`]}`}
        description={`${award[`description_${i18n.language}`]}`}
        img={`${award["img"]}`}
      />
      }

  </Grid>
  );
}

export default Awards;