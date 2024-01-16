import { configureStore } from "@reduxjs/toolkit";
import {preferencesSlice} from './slices/preferencesSlice'
import storageSession from 'redux-persist/lib/storage/session'
import thunk from 'redux-thunk';
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
    preferences: persistedReducer
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