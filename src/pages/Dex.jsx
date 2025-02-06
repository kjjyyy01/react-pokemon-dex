import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  return (
    <>
      <Dashboard selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
      <PokemonList selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
    </>
  );
};

export default Dex;
