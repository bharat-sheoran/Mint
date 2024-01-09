import Button from 'react-bootstrap/Button';
import NavBar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import './ManageNavBar.css';
import NavManageButton from './NavManageButton';
import { Link } from 'react-router-dom';

export default function ManageNavBar() {
    return (
        <>
            <NavBar className='sticky-top justify-content-between manage-navbar'>
                <div className="left">
                    <Link to={'/'} className='logo link'>MINT</Link>
                </div>
                <div className="right">
                    <NavManageButton />
                </div>
            </NavBar>
        </>
    )
}