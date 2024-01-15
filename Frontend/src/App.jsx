import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Manage from './pages/Manage';
import DistributeEditForm from './pages/DistributeEditForm';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ManageEditForm from './pages/ManageEditForm';


function App() {
  localStorage.setItem("isDebit" , false);

  return (
    <>
      <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/manage' element={<Manage />} />
              <Route path='/manage/edit' element={<ManageEditForm />} />
              <Route path='/distribute/edit' element={<DistributeEditForm />} />
            </Routes>
          </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
