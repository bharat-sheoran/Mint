import { useState } from "react";
import axios from "axios";
import './AuthLogin.css'
import TextField from '@mui/material/TextField'
import { Input, InputLabel, InputAdornment, IconButton, FormControl, Checkbox } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Navigate } from "react-router-dom";

//TODO: Style the Login Page
export default function AuthLogin() {
    let [signupFormData, setSignupFormData] = useState({
        username: "",
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
        console.log(signupFormData);
        try {
            const response = await axios.post(`http://localhost:8080/auth/login`,  signupFormData);
            if (response.status === 200) {
                await localStorage.setItem('user', JSON.stringify(response.data));
                return(
                    <Navigate to="/login" />
                )
                console.log("Login Successfull");
            } else {
                console.log("Login Error");
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'An error occurred while logging in');
        }
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
                            <TextField onChange={handlesignupForm} type="text" placeholder="Username" id="email standard-basic" label="Username" variant="standard" name="username" value={signupFormData.email} />
                        </div>
                        <div>
                            <TextField
                                value={signupFormData.password}
                                id="standard-password-input"
                                label="Password"
                                type={passwordType}
                                name="password"
                                autoComplete="current-password"
                                variant="standard"
                                onChange={handlesignupForm}
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
                    {/* <button onClick={google} className="loginButton google">Google</button>
                    <button onClick={facebook} className="loginButton facebook">Facebook</button> */}
                </div>
            </div>
        </div>
    )
}