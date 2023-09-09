import { useState } from "react";

const Card = ({punto}) => {

    const [count,setCount] = useState(0)

    return (
        <div className="card">
            <h2>{punto.nombre}</h2>
        </div>
    )
}
export default Card