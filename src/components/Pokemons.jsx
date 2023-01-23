import { useState } from "react"

const Pokemons = () => {
  const [pokemon, setPokemon] = useState("Chicorrita");

  setPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then(res => res.json())
      .then(data => data.name)
    }

  return (
    <p>{pokemon}</p>
  )
}

export default Pokemons