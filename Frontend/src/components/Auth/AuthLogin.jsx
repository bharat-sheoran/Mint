import { useState } from "react";

//TODO: Style the Login Page
export default function AuthLogin() {
    let [signupFormData, setSignupFormData] = useState({
        email: "",
        password: ""
    })

    let [passwordType, setPasswordType] = useState("password");

    function handlesignupForm(e) {
        setSignupFormData((currData) => {
            currData[e.target.name] = e.target.value;
            return { ...currData };
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleEye() {
        passwordType === "password" ? setPasswordType("text") : setPasswordType("password");
    }

    function google() {
        window.open("http://localhost:8080/auth/google/callback", "_self");
    }

    return (
        <>
            <button onClick={google} className="loginButton google">Google</button>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input onChange={handlesignupForm} type="email" placeholder="E-mail" id="email" name="email" value={signupFormData.email} />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input onChange={handlesignupForm} type={passwordType} placeholder="Choose a Password" id="password" name="password" value={signupFormData.password} />
                    <button onClick={handleEye}>Eye</button>
                </div>

                <button type="submit">Login</button>
            </form>
        </>
    )
}