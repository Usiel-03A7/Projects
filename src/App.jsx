import { use, useState } from "react";
import './App.css'
export default function App() {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState([])
  const handle = (e) => {
    setTodo(e.target.value);
  }
  const Save = (e) => {
    e.preventDefault()
    if (todo === '') return
    const todoObj = {
      id: Date.now(),
      text: todo,
      completed: false
    }
    setList([...list, todoObj])
    setTodo('')
  }
  const DeleteTodo = (id) => {
    const newList = list.filter(() => todo.id !== id)
    setList(newList);
  }
  const edit = (id) => {
    const newText = prompt('Add edit to do')
    if (newText === '' || newText === null) return
    const newlist = list.map((todo) => {
      if (todo.id === id) return { ...todo, text: newText }
      return todo
    })
    setList(newlist)
  }
  const Todoit = (id) => {

    const newlist = list.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed }
      return todo
    })
    setList(newlist)
  }
  return (
    <div>
      <div>
        <h2>List to do press</h2>
        <form onSubmit={Save}>
          <input type="text" onChange={handle} value={todo} placeholder="Enter a to do " />
          <button type="submit" >Save</button>
        </form>
      </div>
      <div>
        <h2>To do adds</h2>
        {list.map((todo) => (
          <div key={todo.id}>
            <input type="text" value={todo.text} readOnly />
            <button onClick={() => DeleteTodo(todo.id)}>Delete</button>
            <button onClick={() => edit(todo.id)} >edit</button>
            <button onClick={() => Todoit(todo.id)} >{todo.completed ? '✅ Completed' : '⏳ Pending'}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

