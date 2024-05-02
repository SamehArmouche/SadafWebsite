import {createSlice} from '@reduxjs/toolkit'
import { fetchCategories, registerTalent } from '../thunks'

export const talentsSlice = createSlice({
  name: 'talents',
  initialState: {categories: [], loadingCategories: false, error: null, loadingRegisterTalent:false, msg:''},
  extraReducers: (builder)=>{
    builder.addCase(fetchCategories.pending, (state) =>{
      state.loadingCategories = true;
    })
    .addCase(fetchCategories.fulfilled, (state, action) =>{
      state.categories = action.payload;
      state.loadingCategories = false;
    })
    .addCase(fetchCategories.rejected, (state, action) =>{
      state.loadingCategories = false;
      state.error = action.error.message;
    })
    .addCase(registerTalent.pending, (state) =>{
      state.loadingRegisterTalent = true;
    })
    .addCase(registerTalent.fulfilled, (state, action) =>{
      state.msg = action.payload;
      state.loadingRegisterTalent = false;
    })
    .addCase(registerTalent.rejected, (state, action) =>{
      state.loadingRegisterTalent = false;
      state.error = action.error.message;
    })
  },
});