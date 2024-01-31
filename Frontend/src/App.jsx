import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Manage from './pages/Manage';
import DistributeEditForm from './pages/DistributeEditForm';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ManageEditForm from './pages/ManageEditForm';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

//TODO: Create the User for more Interaction(Authenticate the App)
//TODO: Create Authentication for facebook
//TODO: Create E-mail Authentication
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("http://localhost:8080/auth/login/success", { withCredentials: true });
        setUser(response.data.user);
      } catch (err) {
        console.log(err);
      }
    }
    getUser();
  }, [])

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home user={user} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/manage' element={user ? <Manage user={user} /> : <Navigate to="/login" />} />
            <Route path='/manage/edit' element={user ? <ManageEditForm /> : <Navigate to="/login" />} />
            <Route path='/distribute/edit' element={user ? <DistributeEditForm /> : <Navigate to="/login" />} />
            <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;
