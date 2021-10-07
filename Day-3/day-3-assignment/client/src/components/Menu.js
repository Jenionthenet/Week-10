import { Component } from 'react';
import {NavLink } from "react-router-dom"
import "./Menu.css"
import './CartCount'
import CartCount from './CartCount';
import { connect } from 'react-redux'

class Menu extends Component {

    render() {
        return (
            <div id="menuDiv">
                <NavLink to = "/"><div id="home">Home</div></NavLink>
                {this.props.isAuth ? <NavLink to = "/books"><div id="books">Books</div></NavLink> : null}
                {this.props.isAuth ?  <NavLink to = "/add-book"><div id="addBook">Add Book</div></NavLink>: null}
                {this.props.isAuth ? <NavLink to = "/cart"><div id="cart">View Cart</div></NavLink> : null}
                {this.props.isAuth ? <NavLink to = "/favorites"><div id="favorites">View Favorites</div></NavLink> : null}
                <NavLink to = "/login"><div id ="login">Log In</div></NavLink>
                <NavLink to = "/register"><div id= "register">Register</div></NavLink>
                {this.props.isAuth ?  <NavLink to = "/sign-out"><div id = "signOut">Sign Out</div></NavLink> : null}
                {this.props.isAuth ?  <CartCount/> : null }
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuthenticated
    }
}

export default connect(mapStateToProps)(Menu)