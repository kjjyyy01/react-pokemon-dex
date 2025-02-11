export const loadPokemonFromStorage = () => {
  const getData = localStorage.getItem("pokemon");
  return getData ? JSON.parse(getData) : [];
};

export const savePokemonFromStorage = (pokemonList) => {
  return localStorage.setItem("pokemon", JSON.stringify(pokemonList));
};
