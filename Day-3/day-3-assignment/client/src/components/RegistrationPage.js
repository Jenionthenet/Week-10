
import React, { useState } from 'react'


function RegistrationPage(props) {
    
    
    const [user, setUser] = useState({
        username: "",
        password: ""
        
    })
    const [error, setError] = useState('')

    const handleRegisterChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
                })
            }).then(response =>response.json())
            .then(result => {
                console.log(result)
                if (result.success == true){
                    props.history.push('/login')
                } else {
                    setError(result.error)
                }
                
            
        })
    }

    return (
        <div>
            <h1>Registration</h1>
            <input type = "text" name = "username" onChange = {handleRegisterChange} placeholder = "Enter username"/>
            <input type = "password" name = "password" onChange = {handleRegisterChange} placeholder = "Enter password"/>
            <button onClick={handleSubmit}> Submit </button>
        </div>
    )


}

export default RegistrationPage