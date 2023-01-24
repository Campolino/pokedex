import './App.css'
import Greetings from './components/Greetings'
import Pokemons from './components/Pokemons'

function App() {
  const pokemon = () => Pokemons()
  console.log(pokemon)
  return (
    <>
      <Greetings name="Lagarta" />
      <h2>{pokemon}</h2>
    </>
  )
}

export default App
