import { createSlice } from "@reduxjs/toolkit";
import { loadPokemonFromStorage } from "../../utils/localStorage";

//* 로컬스토리지를 통해 데이터를 로컬 브라우저에 저장하고 저장한 값을 state에 초기값으로 설정한 로직입니다.
const initialState = loadPokemonFromStorage();

//* 포켓몬을 대시보드에 추가하고 제거하는 reducer를 만들고 export하는 로직입니다.
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
