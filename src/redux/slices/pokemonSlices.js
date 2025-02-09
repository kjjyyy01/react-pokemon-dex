import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = [];

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const pokemon = action.payload;

      if (state.length >= 6) {
        toast.warn("최대 6마리까지 추가할 수 있습니다.");
        return;
      }

      if (state.find((poke) => poke.id === pokemon.id)) {
        toast.warn("이미 추가된 포켓몬입니다!");
        return;
      }
      return [...state, pokemon];
    },
    cancelPokemon: (state, action) => {
      const id = action.payload;
      return state.filter((pokemon) => pokemon.id !== id);
    },
  },
});

export const { addPokemon, cancelPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
