
import { Component } from 'react';
import Name from './Name';

class App extends Component {

  constructor(){
    super()

    this.state = {
      name: ""
    }
  }

valueSubmitted = (value) => {
  this.setState({
    name: value
  })
}

render() {
  return (
    <div>
      
      <Name onValueSubmitted = {this.valueSubmitted}/>
      <h1>{this.state.name}</h1>
    </div>
  )
}
}



export default App;
