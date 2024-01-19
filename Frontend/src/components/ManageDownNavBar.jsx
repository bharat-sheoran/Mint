import NavBar from 'react-bootstrap/Navbar'
import './ManageDownNav.css'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function ManageDownNavBar({ handleIsDebit, isDebit }) {
    const manages = useSelector((state) => state.manage.manages);

    const handleCredit = () => {
        handleIsDebit(true);
        localStorage.setItem("isDebit", true);
    }
    const handleDebit = () => {
        handleIsDebit(false);
        localStorage.setItem("isDebit", false);
    }

    return (
        <>
            <NavBar className='justify-content-between manage-down-navbar'>
                <div className="left-down-navbar">
                    <b>Availaible: {typeof manages[0] == 'undefined' ? 0 : manages[0].Availaible}</b>
                </div>
                <div className="right-down-navbar">
                    <a className={`debit ${isDebit ? "" : "debit-active"}`} onClick={handleDebit}>Debit</a>
                    <a className={`credit ${isDebit ? "credit-active" : ""}`} onClick={handleCredit}>Credit</a>
                </div>
            </NavBar>
        </>
    )
}