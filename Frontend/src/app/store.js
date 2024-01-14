import { configureStore } from '@reduxjs/toolkit'
import manageReducer from '../features/manage/manageSlice.js'
import distributeReducer from '../features/distribute/distributeSlice.js'

export const store = configureStore({
  reducer: {
      manage: manageReducer,
      distribute: distributeReducer
  },
})

export default store;
