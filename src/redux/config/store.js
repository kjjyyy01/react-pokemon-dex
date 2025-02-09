import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../slices/pokemonSlices";

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;
