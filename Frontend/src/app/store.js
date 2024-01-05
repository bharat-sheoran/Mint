import { configureStore } from '@reduxjs/toolkit'
import manageReducer from '../features/manage/manageSlice.js'

export const store = configureStore({
  reducer: manageReducer,
})