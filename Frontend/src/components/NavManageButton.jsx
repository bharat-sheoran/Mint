import { Link } from "react-router-dom";
import './NavManageButton.css';

export default function NavManageButton(){

    return (
        <>
            <Link to={'/manage'} className="link">
                Manage
            </Link>
        </>
    )
}