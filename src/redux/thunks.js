import {createAsyncThunk} from '@reduxjs/toolkit'

//////////////// Preferences /////////////////////////////
export const updateLanguage = createAsyncThunk(
  'preferences/updateLanguage',
  () =>{
    //const storage = JSON.parse(await localStorage.getItem("persist:root"))

    const data = {}
    console.log("data")
    return data;
  }
)

//////////////// Services /////////////////////////////
export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async () =>{
    const response = await fetch(`/sadaf/service`,{
    method : 'GET',
    headers: {
      'Content-Type':'application/json'
    }
    });
    const data = await response.json();
    if(response.status!==200){
      throw new Error(data.msg);
    }
    return data;
  }
)