import NavBar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './ManageDownNav.css'

export default function ManageDownNavBar({ handleIsDebit, isDebit }) {

    const handleCredit = ()=>{
        handleIsDebit(true);
        localStorage.setItem("isDebit" , true);
    }
    const handleDebit = ()=>{
        handleIsDebit(false);
        localStorage.setItem("isDebit" , false);
    }

    return (
        <>
            <NavBar className='justify-content-between manage-down-navbar'>
                <div className="left">
                    <button onClick={handleDebit}>Debit</button>
                    <button onClick={handleCredit}>Credit</button>
                </div>
                <div className="right">
                    {isDebit?<Link to="/distribute/add" className='add-button'>
                        Add
                    </Link>:<Link to="/manage/add" className='add-button'>
                        Add
                    </Link>}
                </div>
            </NavBar>
        </>
    )
}