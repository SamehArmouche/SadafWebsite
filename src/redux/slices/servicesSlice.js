import {createSlice} from '@reduxjs/toolkit'
import {fetchServices, registerService, requestService} from '../thunks'

export const servicesSlice = createSlice({
  name: 'services',
  initialState: {services: [], loadingService: false, error: null, msg:'', loadingRegisterForm:false, loadingRequestForm:false },
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
    builder.addCase(registerService.pending, (state) =>{
      state.loadingRegisterForm = true;
    })
    .addCase(registerService.fulfilled, (state, action) =>{
      state.loadingRegisterForm = false;
      state.msg = action.payload;
    })
    .addCase(registerService.rejected, (state, action) =>{
      state.loadingRegisterForm = false;
      state.error = action.error.message;
    })
    builder.addCase(requestService.pending, (state) =>{
      state.loadingRequestForm = true;
    })
    .addCase(requestService.fulfilled, (state, action) =>{
      state.loadingRequestForm = false;
      state.msg = action.payload;
    })
    .addCase(requestService.rejected, (state, action) =>{
      state.loadingRequestForm = false;
      state.error = action.error.message;
    })
  },
});