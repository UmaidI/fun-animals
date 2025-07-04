import { useState, useEffect } from "react";
const PokemonList = ({setSinglePokemonDetails}) => {
  const [allPokemon, setAllPokemon] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
      const pokemon = await response.json();
      const arrOfPokemon = pokemon.results;
      setAllPokemon(arrOfPokemon);
    }
    getData()
  }, []);

  const getPokemonDetails = async (pokemonURL) => {
    const response = await fetch(pokemonURL);
    const data = await response.json();
    setSinglePokemonDetails(data);
  }
  
  return (
    <>
<ul>
{
  allPokemon.map((singlePokemon)=> {
    return <li onClick={() => {getPokemonDetails(singlePokemon.url)}}
     key={singlePokemon.url}>
      {singlePokemon.name}</li>
  })
}
</ul>
      
    </>

  )
}
export default PokemonList;
