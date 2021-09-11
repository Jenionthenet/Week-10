import React, { useState } from 'react'

function RegistrationPage() {
    
    
    const [user, setUser] = useState({})
    const handleRegisterChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>Registration</h1>
            <input type = "text" name = "username" onChange = {handleRegisterChange} placeholder = "Enter username"/>
            <input type = "password" name = "password" onChange = {handleRegisterChange} placeholder = "Enter password"/>
            <button> Submit </button>
        </div>
    )


}

export default RegistrationPage