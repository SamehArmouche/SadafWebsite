import {createSlice} from '@reduxjs/toolkit'
import {fetchInformations} from '../thunks'

export const informationsSlice = createSlice({
  name: 'informations',
  initialState: {informations: [], loadingInformations: false, error: null, msg:'' },
  extraReducers: (builder)=>{
    builder.addCase(fetchInformations.pending, (state) =>{
      state.loadingInformations = true;
    })
    .addCase(fetchInformations.fulfilled, (state, action) =>{
      state.loadingInformations = false;
      state.informations = action.payload;
    })
    .addCase(fetchInformations.rejected, (state, action) =>{
      state.loadingInformations = false;
      state.error = action.error.message;
    })
  },
});