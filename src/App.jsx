import { useState } from "react";
import './App.css'
const App = () => {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState([])

  const handle = (e) => {
    setTodo(e.target.value)
  }
  const save = (e) => {
    console.log('save');
    e.preventDefault()
    if (todo.trim() == '') return
    setList([...list, todo])
    setTodo('')
  }
  const Edit = (i) => {
    const newText = prompt('add new text', list[i])
    const newlist = list.map((item, index) => {
      if (i == index) return i
      return newText
    })
    setList(newlist);
  }

  const Delete = (i) => {
    const newList = list.filter((item, index) => index !== i)
    setList(newList)
  }

  return (
    <div>
      <form onSubmit={save}>
        <h2>To Do list Add</h2>
        <input
          type="text"
          onChange={handle}
          value={todo}
          placeholder="add text" />
        <button>save</button>
      </form>
      <div>
        <h2>To do list items</h2>
        {list.map((value, index) => (
          <div key={index}>
            <input type="text" value={value} readOnly />
            <button onClick={() => (Edit(index))} >Edit</button>
            <button onClick={() => (Delete(index))} >Delete</button>

          </div>
        ))}
      </div>

    </div>
  )
}
export default App;
