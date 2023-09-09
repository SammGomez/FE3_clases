const Home = () =>{
    let elementos = [
        {id:1, nombre: "punto 1"},
        {id:2, nombre: "punto 2"},
        {id:3, nombre: "punto 3"},
        {id:4, nombre: "punto 4"}
    ]
    return (
        <div>
            {elementos.map((elemento) => <Card />)}
        </div>
    )
}

export default Home