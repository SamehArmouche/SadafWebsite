import {createSlice} from '@reduxjs/toolkit'
import {fetchSuccess} from '../thunks'

export const successSlice = createSlice({
  name: 'success',
  initialState: {success: [], loadingSuccess: false, error: null, msg:'' },
  extraReducers: (builder)=>{
    builder.addCase(fetchSuccess.pending, (state) =>{
      state.loadingSuccess = true;
    })
    .addCase(fetchSuccess.fulfilled, (state, action) =>{
      state.loadingSuccess = false;
      state.success = action.payload;
    })
    .addCase(fetchSuccess.rejected, (state, action) =>{
      state.loadingSuccess = false;
      state.error = action.error.message;
    })
  },
});