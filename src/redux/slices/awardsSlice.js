import {createSlice} from '@reduxjs/toolkit'
import {fetchAwards} from '../thunks'

export const awardsSlice = createSlice({
  name: 'awards',
  initialState: {awards: [], loadingAwards: false, error: null, msg:'' },
  extraReducers: (builder)=>{
    builder.addCase(fetchAwards.pending, (state) =>{
      state.loadingAwards = true;
    })
    .addCase(fetchAwards.fulfilled, (state, action) =>{
      state.loadingAwards = false;
      state.awards = action.payload;
    })
    .addCase(fetchAwards.rejected, (state, action) =>{
      state.loadingAwards = false;
      state.error = action.error.message;
    })
  },
});