import Button from 'react-bootstrap/Button';
import NavBar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../index.css';
import './ManageNavBar.css';
import NavManageButton from './NavManageButton';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Settings from '../Settings/settings';
import { useState } from 'react';


//TODO: Style the Login and Signup of Navbar
export default function ManageNavBar({ activeState, user }) {
    const [display, setDisplay] = useState(false);

    function handleSettings(){
        if(display){
            console.log(display);
            setDisplay(false);
        }else{
            console.log(display);
            setDisplay(true);
        }
    }

    return (
        <>
            <NavBar className='sticky-top manage-navbar'>
                <div className="left">
                    <Link to={'/'} className='logo link'>MINT</Link>
                </div>
                <div className="right">
                    {!user ? <><Link to={'/login'} className='link user-auth'>Login</Link>
                        <Link to={'/signup'} className='link user-auth'>Signup</Link></> : <><Settings display={display?'flex':'none'}/><div onClick={handleSettings} className={`user-details ${display?'user-details-active':''}`}>{JSON.parse(localStorage.getItem('user')) !== null?JSON.parse(localStorage.getItem('user')).name.charAt(0): ""}</div></>}
                    <NavManageButton activeState={activeState} />
                </div>
            </NavBar>
        </>
    )
}