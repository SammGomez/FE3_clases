import React from 'react'
import { useState } from 'react'

const Form = () => {

  const [estudiante, setEstudiante] = useState({
    nombre:"",
    apellido:"",
    dni:""
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(estudiante.nombre.length > 3 && estudiante.apellido.length > 4){
        setShow(true)
        setError(false)
    } else {
        setError(true)
        setShow(false)
    }
}


  return (
    <form onSubmit={handleSubmit}>
      <label>nombre</label>
      <input type="text" onChange={(e) => setEstudiante({...estudiante, nombre: e.target.value})}/>
      <label>apellido</label>
      <input type="text" onChange={(e) => setEstudiante({...estudiante, apellido: e.target.value})} />
      <label>dni</label>
      <input type="text" onChange={(e) => setEstudiante({...estudiante, dni: e.target.value})} />
      <button onClick={handleSubmit}>Enviar</button>
    </form>
  )
}

export default Form