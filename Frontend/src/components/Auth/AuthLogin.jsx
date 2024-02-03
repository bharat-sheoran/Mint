import { useState } from "react";
import axios from "axios";
import './AuthLogin.css'
import TextField from '@mui/material/TextField'
import { Input, InputLabel, InputAdornment, IconButton, FormControl, Checkbox } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

//TODO: Style the Login Page
export default function AuthLogin() {
    let [signupFormData, setSignupFormData] = useState({
        email: "",
        password: ""
    })

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    let [passwordType, setPasswordType] = useState("password");
    let [agree, setAgree] = useState(false);

    function handlesignupForm(e) {
        setSignupFormData((currData) => {
            currData[e.target.name] = e.target.value;
            return { ...currData };
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await axios.post("http://localhost:8080/auth/login", signupFormData);
        console.log(signupFormData);
        console.log(response);
    }

    function handleEye() {
        passwordType === "password" ? setPasswordType("text") : setPasswordType("password");
    }

    function google() {
        window.open("http://localhost:8080/auth/google/callback", "_self");
    }

    function facebook() {
        window.open("http://localhost:8080/auth/facebook/callback", "_self");
    }

    function handleAgree(e) {
        setAgree(e.target.checked);
    }

    return (
        <div className="login">
            <div className="left-login">

            </div>
            <div className="right-login">
                <div className="up-right-login">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <TextField onChange={handlesignupForm} type="email" placeholder="E-mail" id="email standard-basic" label="E-mail" variant="standard" name="email" value={signupFormData.email} />
                        </div>
                        <div>
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                type={passwordType}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            {passwordType === "password" ? <VisibilityIcon className="password-icon" onClick={handleEye} /> : <VisibilityOffIcon className="password-icon" onClick={handleEye} />}
                        </div>
                        <div>
                            <Checkbox onChange={handleAgree} name="agree" id="agree" value={agree} />
                            <label className="agree-terms-checkbox" htmlFor="agree">Agree Terms&Conditions</label>
                        </div>
                        <button className="submit-login-button" type="submit" disabled={!agree}>Login</button>
                    </form>
                </div>
                <div className="down-right-login">
                    <button onClick={google} className="loginButton google">Google</button>
                    <button onClick={facebook} className="loginButton facebook">Facebook</button>
                </div>
            </div>
        </div>
    )
}