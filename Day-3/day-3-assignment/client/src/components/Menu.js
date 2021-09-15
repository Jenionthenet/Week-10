import { Component } from 'react';
import {NavLink } from "react-router-dom"
import "./Menu.css"
import './CartCount'
import CartCount from './CartCount';

class Menu extends Component {

    render() {
        return (
            <div id="menuDiv">
                <NavLink to = "/"><div id="home">Home</div></NavLink>
                <NavLink to = "/books"><div id="books">Books</div></NavLink>
                <NavLink to = "/add-book"><div id="addBook">Add Book</div></NavLink>
                <NavLink to = "/cart"><div id="cart">View Cart</div></NavLink>
                <CartCount/>
                <NavLink to = "/login"><div id ="login">Log In</div></NavLink>
                <NavLink to = "/register"><div id= "register">Register</div></NavLink>
            </div>
        )
    }

}

export default Menu