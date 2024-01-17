import {createSlice} from '@reduxjs/toolkit'
import {fetchProjects} from '../thunks'

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {projects: [], loadingProjects: false, error: null, msg:'' },
  extraReducers: (builder)=>{
    builder.addCase(fetchProjects.pending, (state) =>{
      state.loadingProjects = true;
    })
    .addCase(fetchProjects.fulfilled, (state, action) =>{
      state.loadingProjects = false;
      state.projects = action.payload;
    })
    .addCase(fetchProjects.rejected, (state, action) =>{
      state.loadingProjects = false;
      state.error = action.error.message;
    })
  },
});