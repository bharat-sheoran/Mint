import { configureStore } from '@reduxjs/toolkit'
import manageReducer from '../features/manage/manageSlice.js'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const reducer = combineReducers({
  manageReducer: manageReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);


export const store = configureStore({
  reducer: persistedReducer,
})
