import {createAsyncThunk} from '@reduxjs/toolkit'
import {localStorage} from 'localStorage'

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