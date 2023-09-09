import React, { useEffect, useState } from 'react'

const PokemonFecth = () => {
    const [pokemon, setPokemon] = useState({})
    const url = "https://pokeapi.co/api/v2/pokemon/ditto"

    const fetchPokemon = () => {
        fecth (url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPokemon(data)
        })

        useEffect(fetchPokemon, [])

    }
  return (
    <div>{pokemon.name}</div>
  )
}

export default PokemonFecth