import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'
import FragComponent from './Components/FragComponent'
import Navbar from "./Components/Navbar"

function App() {
  const [count, setCount] = useState(0)

  //esto es del tema de props
  const titulo1= "inicio";
  const titulo2 = "busqueda";

  return (
    <>
      <ClassComponent />
      <h1>Clase 2, levantar proyecto en vite</h1>
      <FuncComponent titulo={titulo1}/>
      <FuncComponent otroTitulo ={titulo2}/>
      <FragComponent />
      <Navbar />
    </>   //el titulo va del props
  )
}

export default App
