import { Link } from "react-router-dom";
import './NavManageButton.css';

export default function NavManageButton({activeState}){

    return (
        <>
            <Link to={'/manage'} className={`link nav-manage-button ${activeState === "Manage"?"nav-manage-button-active":""}`}>
                Manage
            </Link>
        </>
    )
}