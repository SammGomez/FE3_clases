import React from "react";

const Navbar = () => {
    const titulos = ["Home","Contacto","Shop","Acerda de"];
    const titulosMapeados = titulos.map((titulo, indice) => (
        <h1 key={indice}>{titulo}</h1>
    ));
    return (
        <>
            <h4>
                {titulosMapeados}
            </h4>
        </>
    )
};

export default Navbar;