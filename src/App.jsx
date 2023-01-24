import './App.css'
import { useState, useEffect } from 'react'
import Greetings from './components/Greetings'

const App = () => {
  const [pokemon, setPokemon] = useState("Chicorrita")

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pichu")
      .then(res => res.json())
      .then(data => {
        setPokemon(data.name.toUpperCase())
      })
  }, []);

  return (
    <>
      <main className='container'>
        <Greetings />
        <h2>Your pokemon is {pokemon}</h2>
      </main>
    </>
  )
}

export default App
