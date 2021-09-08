import React, { Component } from 'react'
// import SwitchView from './Switch-view'
// import NameAndPlace from './NameAndPlace'
import Menu from './Menu'
import Body from './body'

import "./App.css"

class App extends Component {

  constructor() {
    super()

    this.state = {
      books: []
    }
  }

componentDidMount() {

  console.log("componentDidMount")
  fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
  .then(response => response.json())
  .then(results => {

    this.setState({
      books: results
    })

  })
}


  
  render() {
    return (
      <div>
        <Menu />
        <Body books = {this.state.books}/>
      </div>
    )
  }

}

export default App;
