import { Component } from "react";

class SwitchView extends Component {


    constructor() {
        super()
        this.state = {
            onStatus: "Off",
            // offStatus: "Off"
        }
    }

turnOn = () => {
    this.setState ({
        onStatus: this.state.onStatus = "On"
    })
}

    render() {
        return (
            <div>
            <button onClick={this.turnOn}>{this.state.onStatus}</button>

        </div>
        )
        
    }
}

export default SwitchView