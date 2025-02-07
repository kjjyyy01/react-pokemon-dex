import { createContext, useState } from "react";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  return <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>{children}</PokemonContext.Provider>;
}
