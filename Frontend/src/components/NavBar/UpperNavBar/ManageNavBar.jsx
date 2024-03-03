import Button from 'react-bootstrap/Button';
import NavBar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../index.css';
import './ManageNavBar.css';
import NavManageButton from './NavManageButton';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';


//TODO: Style the Login and Signup of Navbar
export default function ManageNavBar({ activeState, user }) {

    async function logout(){
        try {
            console.log("Logout Button Clicked");
            const response = await axios.get(`http://localhost:8080/auth/logout`);
            if (response.status === 200) {
                await localStorage.removeItem('user');
                console.log("Item Deleted");
                return(
                    <Navigate to={'/home'} />
                )
            }
        } catch (e) {
            console.log("Error while Logging out");
        }
    }

    return (
        <>
            <NavBar className='sticky-top manage-navbar'>
                <div className="left">
                    <Link to={'/'} className='logo link'>MINT</Link>
                </div>
                <div className="right">
                    {!user ? <><Link to={'/login'} className='link'>Login</Link>
                        <Link to={'/signup'} className='link'>Signup</Link></> : <>"User" <button onClick={logout}>Logout</button></>}
                    <NavManageButton activeState={activeState} />
                </div>
            </NavBar>
        </>
    )
}