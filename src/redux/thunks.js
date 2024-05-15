import {createAsyncThunk} from '@reduxjs/toolkit'

//////////////// Preferences /////////////////////////////
export const updateLanguage = createAsyncThunk(
  'preferences/updateLanguage',
  () =>{
    //const storage = JSON.parse(await localStorage.getItem("persist:root"))

    const data = {}
    return data;
  }
)

//////////////// Services /////////////////////////////
export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async () =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/sadaf/service`,{
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

export const registerService = createAsyncThunk(
  'services/registerService',
  async (service) =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/sadaf/service`,{
    method : 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body:JSON.stringify({ThirdPartyService:service})
    });
    const data = await response.json();
    if(response.status!==200){
      throw new Error(data.msg);
    }
    return data;
  }
)

//////////////// Projects /////////////////////////////
export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/sadaf/project`,{
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

//////////////// Awards /////////////////////////////
export const fetchAwards = createAsyncThunk(
  'awards/fetchAwards',
  async () =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/sadaf/award`,{
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

//////////////// Success /////////////////////////////
export const fetchSuccess = createAsyncThunk(
  'success/fetchSuccess',
  async () =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/sadaf/success`,{
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

//////////////// Informations /////////////////////////////
export const fetchInformations = createAsyncThunk(
  'informations/fetchInformations',
  async () =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/sadaf/information`,{
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

//////////////// ContactForm /////////////////////////////
export const sendContactForm = createAsyncThunk(
  'contactForm/sendContactForm',
  async (message) =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/sadaf/message`,{
    method : 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({Message:message}),
    });
    const data = await response.json();
    if(response.status!==200){
      throw new Error(data.msg);
    }
    return data;
  }
)

//////////////// Talents /////////////////////////////
export const fetchCategories = createAsyncThunk(
  'talents/fetchCategories',
  async (email) =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/sadaf/categories/${email}`,{
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

export const registerTalent = createAsyncThunk(
  'talents/registerTalent',
  async (body) =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/sadaf/registerTalent`,{
    method : 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({Talent:body.talent,parentCat:body.parentCat}),
    });
    const data = await response.json();
    if(response.status!==200){
      throw new Error(data.msg);
    }
    return data;
  }
)

