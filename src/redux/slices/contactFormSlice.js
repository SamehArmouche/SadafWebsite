import {createSlice} from '@reduxjs/toolkit'
import {sendContactForm} from '../thunks'

export const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState: {loadingContactForm: false, error: null, msg:'' },
  extraReducers: (builder)=>{
    builder.addCase(sendContactForm.pending, (state) =>{
      state.loadingContactForm = true;
    })
    .addCase(sendContactForm.fulfilled, (state, action) =>{
      state.loadingContactForm = false;
      state.msg = action.payload;
    })
    .addCase(sendContactForm.rejected, (state, action) =>{
      state.loadingContactForm = false;
      state.error = action.error.message;
    })
  },
});