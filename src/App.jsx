import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const increment = () => {
    if (count <= 11 || count == 0) {

      setCount(count + 1);
    }
  }
  const decrement = () => {

    if (count >= 1)
      setCount(count - 1);

  }
  const zero = () => {
    setCount(0)
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={increment} >
          de count is {count}
        </button>
        <button onClick={decrement}>
          the count is {count}
        </button>

        Edit <button onClick={zero}>
          resetcount {count}
        </button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
