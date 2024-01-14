import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Manage from './pages/Manage';
import ManageAddForm from './pages/ManageAddForm';
import DistributeEditForm from './pages/DistributeEditForm';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ManageEditForm from './pages/ManageEditForm';

function App() {

  return (
    <>
      <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/manage' element={<Manage />} />
              <Route path='/manage/add' element={<ManageAddForm />} />
              <Route path='/manage/edit' element={<ManageEditForm />} />
              <Route path='/distribute/edit' element={<DistributeEditForm />} />
            </Routes>
          </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
