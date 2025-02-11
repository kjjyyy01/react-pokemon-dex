import { createSlice } from "@reduxjs/toolkit";
import { loadPokemonFromStorage } from "../../utils/localStorage";

const initialState = loadPokemonFromStorage();

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      return [...state, action.payload];
    },
    cancelPokemon: (state, action) => {
      return state.filter((pokemon) => pokemon.id !== action.payload);
    },
  },
});

export const { addPokemon, cancelPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
