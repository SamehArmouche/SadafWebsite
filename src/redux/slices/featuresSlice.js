import {createSlice} from '@reduxjs/toolkit'
import {fetchFeatures} from '../thunks'

export const featuresSlice = createSlice({
  name: 'features',
  initialState: {features: [], loadingFeatures: false, error: null, msg:'' },
  extraReducers: (builder)=>{
    builder.addCase(fetchFeatures.pending, (state) =>{
      state.loadingFeatures = true;
    })
    .addCase(fetchFeatures.fulfilled, (state, action) =>{
      state.loadingFeatures = false;
      state.features = action.payload;
    })
    .addCase(fetchFeatures.rejected, (state, action) =>{
      state.loadingFeatures = false;
      state.error = action.error.message;
    })
  },
});