import { useState } from "react";
import './App.css'

const App = () => {
  const [tarea, setTarea] = useState('');
  const [lista, setLista] = useState([]);
  const manejador = (e) => {
    setTarea(e.target.value)
  }
  const guardar = (e) => {
    e.preventDefault();
    if (tarea.trim() === '') return
    const tareaObj = {
      id: Date.now(),
      texto: tarea,
      completada: false
    }
    setLista([...lista, tareaObj])
    setTarea('')
  }
  const eliminar = (id) => {
    const nuenvaLista = lista.filter((tarea) => tarea.id !== id)
    setLista(nuenvaLista)
  }

  const editar = (id) => {
    const nuevoTexto = prompt('Ingresa el nuevo texto')
    if (nuevoTexto === null || nuevoTexto === '') return
    const nuevaLista = lista.map((tarea) => {
      if (tarea.id === id) return { ...tarea, texto: nuevoTexto }
      return tarea
    })
    setLista(nuevaLista)
  }
  return (
    <div>

      <form onSubmit={guardar}>
        <h2>Ingresa Tareas</h2>
        <input type="text" value={tarea} onChange={manejador} />
        <button type="submit" >Guardat</button>
      </form>
      <div>
        <h2>Lista de pendientes</h2>
        {lista.map((tarea) => (
          <div key={tarea.id}>
            <input type="text" value={tarea.texto} readOnly />
            <button onClick={() => { editar(tarea.id) }} >Editar</button>
            <button onClick={() => { eliminar(tarea.id) }} >Eliminar</button>
          </div>
        ))}
      </div>


    </div>
  )

}
export default App;
