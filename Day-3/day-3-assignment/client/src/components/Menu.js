import { Component } from 'react';
import {NavLink } from "react-router-dom"
import "./Menu.css"

class Menu extends Component {

    render() {
        return (
            <div id="menuDiv">
                <NavLink to = "/"><div id="home">Home</div></NavLink>
                <NavLink to = "/books"><div id="books">Books</div></NavLink>
                <NavLink to = "/add-book"><div id="addBook">Add Book</div></NavLink>
            </div>
        )
    }

}

export default Menu