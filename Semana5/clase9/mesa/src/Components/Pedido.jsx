import React from 'react'
import { useEffect, useState } from 'react'

const Pedido = () => {
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("se monto el componente");

    return () => {
        console.log("se desmontó el componente");
    }
  } , [loading])

  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 2000)
}, [])

  return (
    <div>
        {console.log("se ejecutó el render")}
        <h1>Su pedido:</h1>
        {loading ? "" :
        <>
            <h2>-Pizzas</h2>
        </>}
        <button onClick={() => setLoading(true)}>Cancelar Pedido</button>
    </div>
    )
}

export default Pedido