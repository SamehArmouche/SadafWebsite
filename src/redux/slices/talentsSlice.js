import {createSlice} from '@reduxjs/toolkit'
import { fetchCategories } from '../thunks'

export const talentsSlice = createSlice({
  name: 'talents',
  initialState: {categories: [], loadingCategories: false, error: null},
  extraReducers: (builder)=>{
    builder.addCase(fetchCategories.pending, (state) =>{
      state.loading = true;
    })
    .addCase(fetchCategories.fulfilled, (state, action) =>{
      state.categories = action.payload;
      state.loading = false;
    })
    .addCase(fetchCategories.rejected, (state, action) =>{
      state.loading = false;
      state.error = action.error.message;
    })
  },
});