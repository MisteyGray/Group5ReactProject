import React, { useState } from "react"

const SigninForms = () => {
    const [showInButton, setShowInButton] = useState(true)
    const [showOutButton, setShowOutButton] = useState(false)
    const [showLoginForm, setShowLoginForm] = useState(false)
    const [showRegisterForm, setShowRegisterForm] = useState(false)

    const handleLogIn = (e) => {
        e.preventDefault()
        setShowLoginForm(false)
        setShowOutButton(true)
        setShowInButton(false)
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        setShowLoginForm(true)
        setShowOutButton(true)
        setShowInButton(false)
    }

    const handleSignOut = (e) => {
        e.preventDefault()
        setShowInButton(true)
        setShowRegisterForm(false)
        setShowOutButton(false)
        setShowLoginForm(false)
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        setShowRegisterForm(true)
        setShowInButton(true)
    }

    return (
        <>
            {showInButton && (<button onClick={handleSignIn} className="signButton">Sign-In</button>
            )}
            {showOutButton && (
                <button onClick={handleSignOut} className="signButton">Sign-Out</button>
            )}

            {showLoginForm && (

                <div className="formContainer">
                    <label for="uname"><b>Username</b></label>
                    <input id="uname" className="formInputs" type="text" placeholder="Enter Username" name="uname" required></input>

                    <label for="psw"><b>Password</b></label>
                    <input id="psw" className="formInputs" type="password" placeholder="Enter Password" name="psw" required></input>

                    <button id="logInClick" onClick={handleLogIn} type="submit">Log-In</button>
                </div>
            )}
            <button className="registerButton" onClick={handleRegistration}>Register</button>

            {showRegisterForm && (
                <>

                    <div id="registerForm">
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />
                        <label for="email"><b>Email</b></label>
                        <input id="email" className="formInputs" type="text" placeholder="Enter Email" name="email" required></input>

                        <label for="psw2"><b>Password</b></label>
                        <input id="psw2" className="formInputs" type="password" placeholder="Enter Password" name="psw" required></input>

                        <label for="pswRepeat"><b>Repeat Password</b></label>
                        <input id="pswRepeat" className="formInputs" type="password" placeholder="Repeat Password" name="psw-repeat" required></input>

                        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                        <hr />
                        <button id="registerButton" onClick={handleSignOut} type="submit">Register</button>
                    </div>
                </>
            )}
        </>
    )
}

export default SigninForms





