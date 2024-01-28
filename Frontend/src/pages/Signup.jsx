import AuthSignup from "../components/Auth/AuthSignup"
import ManageNavBar from "../components/NavBar/UpperNavBar/ManageNavBar"

export default function Signup(){
    return (
        <>
            <ManageNavBar activeState={"signup"}/>
            <AuthSignup/>
        </>
    )
}