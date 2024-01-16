import {createAsyncThunk} from '@reduxjs/toolkit'
import {localStorage} from 'localStorage'
//////////////// Preferences /////////////////////////////
export const updateLanguage = createAsyncThunk(
  'preferences/updateLanguage',
  async (page) =>{
    const storage = JSON.parse(await localStorage.getItem("persist:root"))
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user?data=${JSON.parse(storage.user).data}&page=${page}`,{
    method : 'GET',
    headers: {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${JSON.parse(storage.user).accessToken}`
    }
    });
    const data = await response.json();
    if(response.status!==200){
      throw new Error(data.msg);
    }
    return data;
  }
)