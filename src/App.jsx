import { useState } from "react";
import './App.css'
import Edit from "./components/Edit";

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
        <input className="border-2 mr-2 border-black" type="text" value={tarea} onChange={manejador} />
        <button type="submit" className="hover:bg-sky-700 bg-blue-600 text-orange-200">Guardat</button>
      </form>
      <div>
        <h2>Lista de pendientes</h2>
        {lista.map((tarea) => (
          <div className="mb-2" key={tarea.id}>
            <input className="border-2 mr-2 border-black" type="text" value={tarea.texto} readOnly />
            <button className=" mr-2  bg-orange-600 text-orange-200" onClick={() => { editar(tarea.id) }} >Editar</button>
            <button className="bg-red-700 text-orange-200" onClick={() => { eliminar(tarea.id) }} >Eliminar</button>
          </div>
        ))}
      </div>

      <Edit />

    </div>
  )

}
export default App;
