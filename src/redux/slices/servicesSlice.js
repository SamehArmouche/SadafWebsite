import {createSlice} from '@reduxjs/toolkit'
import {fetchServices} from '../thunks'

export const servicesSlice = createSlice({
  name: 'services',
  initialState: {services: [], loadingService: false, error: null, msg:'' },
  extraReducers: (builder)=>{
    builder.addCase(fetchServices.pending, (state) =>{
      state.loadingService = true;
    })
    .addCase(fetchServices.fulfilled, (state, action) =>{
      state.loadingService = false;
      state.services = action.payload;
    })
    .addCase(fetchServices.rejected, (state, action) =>{
      state.loadingService = false;
      state.error = action.error.message;
    })
  },
});