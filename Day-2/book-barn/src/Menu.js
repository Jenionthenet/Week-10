import { Component } from "react";
import './Menu.css'

class Menu extends Component {

    render() {
        return (
            <div id="menu">
                <div id="titleDiv"><h1 id="siteTitle">Book Barn</h1></div>

                <h2 id="home">Home</h2>
                <h2 id="browse">Browse</h2>
                <input id="searchBx" type="text" placeholder="      Search" />
                <button id="submitBtn">Submit</button>
                <h2 id="logIn">Log In</h2>
                <h2 id="signUp">Sign Up</h2>

            </div>
        )
    }
}

export default Menu