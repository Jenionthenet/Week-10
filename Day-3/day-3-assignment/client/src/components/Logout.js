import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions/actionTypes'

function Logout(props) {

    useEffect(() => {

        //remove the token from local storage
        localStorage.removeItem('jsonwebtoken')

        //update the global state isAuthenticated = false
        props.onLogout()

        //take the user back to homepage after signout
        props.history.push('/')
    })

    return (
        <h1> You are logged out. See you back soon!</h1>
    )
}


const mapDispatchToProps = (dispatch) => {

    return {
        onLogout: () => dispatch({type: actionTypes.ON_LOGOUT})
    }
}


export default connect(null, mapDispatchToProps)(Logout)