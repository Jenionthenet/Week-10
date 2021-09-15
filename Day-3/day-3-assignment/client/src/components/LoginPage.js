import React, { useState } from 'react'


function LoginPage() {

    const [user, setUser] = useState({})
    const [message, setMessage] = useState('')

    const handleLoginChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

//     const handleLoginButton = () => {
//         // fetch('http://localhost:8080/login', {
//         //     method: 'POST', 
//         //     headers: {
//         //         'Content-Type': 'application/json'
//         //     },
//         //     body: JSON.stringify(login)
//         // }).then(response => response.json())
//         // .then(result => {
//         //     console.log(result)
//         //     if(result.success){
//         //     props.history.push('/')
//         //     }else {
//         //     setMessage(result.message)
//         //     }
// // set res {ult.username and result.id as a global state in redux
// // then set window location to homepage(where ever they should go after logging in)




//         })
//     }

    return (
        <div> 
            <h1>Login</h1>
            <input type = "text" name = "username" onChange = {handleLoginChange} placeholder = "Enter username"/>
            <input type = "password" name = "password" onChange = {handleLoginChange} placeholer = "Enter password"/>
            {/* <button onclick= {handleLoginButton}>Log In</button> */}
            {/* {message ? <h1>{message}</h1>: ""} */}
        </div>
    )



}
 export default LoginPage