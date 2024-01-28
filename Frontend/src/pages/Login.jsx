import AuthLogin from "../components/Auth/AuthLogin"
import ManageNavBar from "../components/NavBar/UpperNavBar/ManageNavBar"

export default function Login(){
    return (
        <>
            <ManageNavBar activeState={"login"}/>
            <AuthLogin/>
        </>
    )
}