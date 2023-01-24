import './App.css'
import { useState, useEffect } from 'react'
import Greetings from './components/Greetings'

function App() {
  const [pokemon, setPokemon] = useState("Chicorrita")

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pichu")
      .then(res => res.json())
      .then(data => setPokemon(data.name.toUpperCase()))
  }, []);

  return (
    <>
      <Greetings name="Lagarta" />
      <h2>Your pokemon is {pokemon}</h2>
    </>
  )
}

export default App
