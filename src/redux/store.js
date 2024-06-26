import { configureStore } from "@reduxjs/toolkit";
import {preferencesSlice} from './slices/preferencesSlice'
import {servicesSlice} from './slices/servicesSlice'
import {projectsSlice} from './slices/projectsSlice'
import {awardsSlice} from './slices/awardsSlice'
import {successSlice} from './slices/successSlice'
import {informationsSlice} from './slices/informationsSlice'
import {contactFormSlice} from './slices/contactFormSlice'
import storageSession from 'redux-persist/lib/storage/session'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: storageSession,
}

const persistedReducer = persistReducer(persistConfig, preferencesSlice.reducer)


export const store = configureStore({
  reducer:{
    preferences: persistedReducer,
    services: servicesSlice.reducer,
    projects: projectsSlice.reducer,
    awards: awardsSlice.reducer,
    success: successSlice.reducer,
    informations: informationsSlice.reducer,
    contactForm:contactFormSlice.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store)