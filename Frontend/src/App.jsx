import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Manage from './pages/Manage';
import ManageAddForm from './pages/ManageAddForm';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ManageEditForm from './pages/ManageEditForm';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

function App() {
  let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/manage' element={<Manage />} />
              <Route path='/manage/add' element={<ManageAddForm />} />
              <Route path='/manage/edit' element={<ManageEditForm />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
