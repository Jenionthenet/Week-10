import { Component } from "react";

class Name extends Component {

    constructor() {
        super()

        this.state = {
            nameValue: ""
        }
    }

    handleNameInput = (e) => {
        this.setState({
            nameValue: (e.target.value)
        })
    }

    handleSubmit = () => {
        this.props.onValueSubmitted(this.state.nameValue)
    }

    render() {
        return (
            <div>
                <h1>Enter Name</h1>
                <input type = "text" onChange = {this.handleNameInput} placeholder = "Enter your name"/>
                <button onClick = {this.handleSubmit}>Submit</button>
            </div>
        )
    }

}

export default Name