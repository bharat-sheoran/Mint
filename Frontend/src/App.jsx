import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Manage from './pages/Manage';
import ManageAddForm from './pages/ManageAddForm';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/manage' element={<Manage />} />
          <Route path='/manage/add' element={<ManageAddForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
