import { useState } from "react";

const Form = () => {

    const [cliente, setCliente] = useState({
        nombre:"",
        apellido:"",
        pokemonFavorito:""
    })
    console.log(cliente);

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(cliente.nombre.length > 3 && cliente.apellido.length > 4 && cliente.pokemonFavorito.length > 3){
            setShow(true)
            setError(false)
        } else {
            setError(true)
            setShow(false)
        }
    }

    return (
        <form onSubmit ={handleSubmit}>
            <label>nombre:</label>
            <input type = "text" onChange={(e) => setCliente({...cliente, nombre: e.target.value})}/>
            <label>apellido:</label>
            <input type = "text" onChange = {(e) => setCliente({...cliente, apellido: e.target.value})}/>
            <label>pokemon Favorito:</label>
            <input type = "text" onChange = {(e) => setCliente({...cliente, pokemonFavorito: e.target.value})}/>
            <button>Enviar</button>

            {error && <h6>Corrobore bien la info</h6>}

        {show ? <>
            <h4>Gracias {cliente.nombre}!</h4>
        </>
        : null
        }

        </form>
    )
    


}
export default Form