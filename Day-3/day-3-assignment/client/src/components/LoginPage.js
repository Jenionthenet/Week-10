import React, { useState } from 'react'
import  { useHistory } from 'react-router'

function LoginPage(props) {

    const history = useHistory()
    const [user, setUser] = useState({

        username: "",
        password: ""
    })
    const [message, setMessage] = useState('')

    const handleLoginChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginButton = () => {
        fetch('http://localhost:8080/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password
            }
                
            )
        }).then(response => response.json())
        .then(result => {
            localStorage.setItem('jsonwebtoken', result.token)
            console.log(result)
            if(result.success){

          history.push('/')
            }else {
            setMessage(result.message)
            }
// set res {ult.username and result.id as a global state in redux
// then set window location to homepage(where ever they should go after logging in)




        })
    }

    return (
        <div> 
            <h1>Login</h1>
            <input type = "text" name = "username" onChange = {handleLoginChange} placeholder = "Enter username"/>
            <input type = "password" name = "password" onChange = {handleLoginChange} placeholer = "Enter password"/>
            <button onClick= {handleLoginButton}>Log In</button>
           
        </div>
    )



}
 export default LoginPage