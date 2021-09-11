import './App.css'
import React, { useEffect, useState } from 'react'
import Item from './Data';


function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    getAllData()
  }, [])

  const getAllData = () => {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(result => {
        console.log(items)
        setItems(result.data)
      })
  }

  return (
    <div id="counter">
      <button id="incrementBtn" onClick={increment}>+</button>
      <h1 id="number">{count}</h1>
      <button id="decrementBtn" onClick={decrement}>-</button>
      <Item items={items} />
    </div>
  )
}

export default App;
