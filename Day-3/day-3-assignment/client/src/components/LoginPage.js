import React, { useState } from 'react'

function LoginPage() {

    const [user, setUser] = useState({})

    const handleLoginChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div> 
            <h1>Login</h1>
            <input type = "text" name = "username" onChange = {handleLoginChange} placeholder = "Enter username"/>
            <input type = "password" name = "password" onChange = {handleLoginChange} placeholer = "Enter password"/>
            <button>Log In</button>
        </div>
    )



}
 export default LoginPage