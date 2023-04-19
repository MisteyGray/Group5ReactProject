import React, { useState } from "react"

const Form = () => {

    const [visibility, setVisibility] = useState(false);
    const [firstName, setFirstname] = useState('')
    const [lastName, setLasttname] = useState('')
    const [eMail, seteMail] = useState('')
    const [message, setMessage] = useState('')


    const handleClick = () => {
        setVisibility(!visibility)
    }

    const alertClick = () => {
        alert(`Thank you ${firstName} for contacting Ugo Destinations! A Reply Email will be sent to your account.`)
        setFirstname('')
        setLasttname('')
        seteMail('')
        setMessage('')
    }

    return (
        <>
            <div id="contactUs" className="formDiv" >
                <h1 id="title">Contact Us</h1>
                <h2 className="businessInfo">Ugo Destinations</h2>
                <h4 className="businessInfo">555-555-5555</h4>
                <h4 className="businessInfo">777 N. ParkPlace Ave.</h4>
                <h4 className="businessInfo">NewYork, NY. 12345</h4>
                <a className="businessInfo" href="mailto:ugodestinations@gmail.com">UgoDestinations@gmail.com</a>
                <div id="formFields">
                    <button className="contactButton" onClick={handleClick}>Contact Now</button>
                    {visibility && <> <form id="form-wrapper">
                        <input placeholder="FirstName" value={firstName} onChange={(e) => setFirstname(e.target.value)} id="firdstName" className="input" />
                        <input placeholder="LastName" value={lastName} onChange={(e) => setLasttname(e.target.value)} id="lastName" className="input" />
                        <input placeholder="Email" value={eMail} onChange={(e) => seteMail(e.target.value)} id="eMailAdd" className="input" />
                        <input placeholder="Type Message Here" value={message} onChange={(e) => setMessage(e.target.value)} type="textarea" id="commentField" />
                        <button type="button" className="contactButton" onClick={alertClick}>Submit</button></form>  </>}
                </div>
            </div>
        </>
    )
}

export default Form
