import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import cursorReducer from './features/cursorSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cursor: cursorReducer
  },
})