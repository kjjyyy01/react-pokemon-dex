import { useEffect } from "react";
import { useSelector } from "react-redux";
import { savePokemonFromStorage } from "../../utils/localStorage";

export const usePokemonStorage = () => {
  const pokemonList = useSelector((state) => state.pokemon);

  useEffect(() => {
    savePokemonFromStorage(pokemonList);
  }, [pokemonList]);
};
