import { useState } from "react";


//TODO: Style the Signup Page
export default function AuthSignup() {

    let [signupFormData, setSignupFormData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
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

    function handleEye(){
        passwordType==="password"?setPasswordType("text"):setPasswordType("password");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input onChange={handlesignupForm} type="text" placeholder="Name" id="name" name="name" value={signupFormData.name} />
                </div>

                <div>
                    <label htmlFor="username">Username:</label>
                    <input onChange={handlesignupForm} type="text" placeholder="Username" id="username" name="username" value={signupFormData.username} />
                </div>

                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input onChange={handlesignupForm} type="email" placeholder="E-mail" id="email" name="email" value={signupFormData.email} />
                </div>

                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input onChange={handlesignupForm} type="text" placeholder="Phone" id="phone" name="phone" value={signupFormData.phone} />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input onChange={handlesignupForm} type={passwordType} placeholder="Choose a Password" id="password" name="password" value={signupFormData.password} />
                    <button onClick={handleEye}>Eye</button>
                </div>

                <button type="submit">Signup</button>
            </form>
        </>
    )
}