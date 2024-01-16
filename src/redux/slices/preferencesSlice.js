import {createSlice} from '@reduxjs/toolkit'
import { updateLanguage } from '../thunks'

export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: {language: "en", loading: false, error: null},
  extraReducers: (builder)=>{
    builder.addCase(updateLanguage.pending, (state) =>{
      state.loading = true;
    })
    .addCase(updateLanguage.fulfilled, (state, action) =>{
      state.language = action.payload;
      state.loading = false;
    })
    .addCase(updateLanguage.rejected, (state, action) =>{
      state.loading = false;
      state.error = action.error.message;
    })
  },
});