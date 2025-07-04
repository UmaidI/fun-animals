import PokemonDetails from "./PokemonDetails.jsx"
import PokemonList from "./PokemonList.jsx"
import { useState } from "react"

const App = () => {
  const [singlePokemonDetails, setSinglePokemonDetails] = useState({})
  return (
    <>
      <h1>All Pokemon</h1>
      {
        singlePokemonDetails.name ?
        <PokemonDetails singlePokemonDetails= {singlePokemonDetails}
          setSinglePokemonDetails= {setSinglePokemonDetails}
        /> :
        <PokemonList setSinglePokemonDetails={setSinglePokemonDetails} />

      }
     
    </>
  )
}

export default App
