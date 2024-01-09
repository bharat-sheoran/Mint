import NavBar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './ManageDownNav.css'

export default function ManageDownNavBar() {

    return (
        <>
            <NavBar className='justify-content-between manage-down-navbar'>
                <div className="left">

                </div>
                <div className="right">
                    <Link to="/manage/add" className='debit-button'>
                        Debit
                    </Link>
                    <Link to="/manage/add" className='credit-button'>
                        Credit
                    </Link>
                </div>
            </NavBar>
        </>
    )
}