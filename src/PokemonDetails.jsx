const PokemonDetails = ({singlePokemonDetails, setSinglePokemonDetails}) => {
  return (
    <>
    
    <h1>Pokemon details</h1>
    {console.log(singlePokemonDetails)}
      <li>{singlePokemonDetails.name}</li>
      <img src ={singlePokemonDetails.sprites.front_default}></img>
      <button onClick={ () => {setSinglePokemonDetails({})}}>Back</button>
    </>
  
  )
}
export default PokemonDetails;