const Pokemons = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(res => res.json())
    .then(data => data.name)
}

export default Pokemons