import { Component } from "react";
import "./Menu.css";

class Menu extends Component {

    render() {
        return (
            <div className = "menuDiv">
                <h1 id="menuTitle">HighOnCoding</h1>
                <h2 id="home">Home</h2>
                <h2 id="categories">Categories</h2>
            </div>
        )

    }
}

export default Menu