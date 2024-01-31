import Button from 'react-bootstrap/Button';
import NavBar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../index.css';
import './ManageNavBar.css';
import NavManageButton from './NavManageButton';
import { Link } from 'react-router-dom';


//TODO: Style the Login and Signup of Navbar
export default function ManageNavBar({ activeState, user }) {
    return (
        <>
            <NavBar className='sticky-top manage-navbar'>
                <div className="left">
                    <Link to={'/'} className='logo link'>MINT</Link>
                </div>
                <div className="right">
                    {!user ? <><Link to={'/login'} className='link'>Login</Link>
                        <Link to={'/signup'} className='link'>Signup</Link></> : "User"}
                    <NavManageButton activeState={activeState} />
                </div>
            </NavBar>
        </>
    )
}