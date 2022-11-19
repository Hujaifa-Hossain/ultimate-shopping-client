import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ultimateApi } from './apiSlice'

export const store = configureStore({
  reducer: {
    
    [ultimateApi.reducerPath]: ultimateApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ultimateApi.middleware),
})

setupListeners(store.dispatch)