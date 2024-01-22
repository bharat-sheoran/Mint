import { configureStore } from '@reduxjs/toolkit'
import manageReducer from '../features/manage/manageSlice.js'
import distributeReducer from '../features/distribute/distributeSlice.js'
import availaibleReducer from '../features/Availaible/availaibleSlice.js'

export const store = configureStore({
  reducer: {
      manage: manageReducer,
      distribute: distributeReducer,
      availaible: availaibleReducer
  },
})

export default store;
