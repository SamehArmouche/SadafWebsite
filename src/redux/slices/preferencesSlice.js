import {createSlice} from '@reduxjs/toolkit'
import { updateLanguage } from '../thunks'

export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: {language: "en"},
  extraReducers: (builder)=>{
    builder
    .addCase(updateLanguage.fulfilled, (state, action) =>{
      state.language = action.payload;
    })
  },
});