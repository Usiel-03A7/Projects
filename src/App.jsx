import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodo] = useState('')
  const [newTodo, setNewTodo] = useState([])
  const handle = (e) => {
    setTodo(e.target.value)
  }

  const save = () => {
    if (todo.trim() !== '') {
      setNewTodo([...newTodo, todo])
      setTodo('')
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input type="text" onChange={handle} value={todo} placeholder='ingresa tarea' />
        <button onClick={save} >save</button>
      </div>
      <ul>
        {newTodo.map((item, index) => (
          <li key={index} > {item}</li>
        ))}
      </ul>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
