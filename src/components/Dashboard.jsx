import PokemonCard from "./PokemonCard";

const Dashboard = ({ selectedPokemon, setSelectedPokemon }) => {
  const pokemonBallCount = 6 - selectedPokemon.length;

  const cancelPokemon = (id) => {
    setSelectedPokemon(selectedPokemon.filter((pokemon) => pokemon.id !== id));
  };

  return (
    <header>
      <h1>나만의 포켓몬 도감</h1>
      <ul>
        {selectedPokemon.map((pokemon) => (
          <li key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
            <button onClick={() => cancelPokemon(pokemon.id)}>취소</button>
          </li>
        ))}

        {pokemonBallCount > 0 &&
          Array(pokemonBallCount)
            .fill(null)
            .map((_, index) => (
              <li key={`${index}`}>
                <img src="/image/monsterBall-img.png" alt="빈 포켓볼" />
              </li>
            ))}
      </ul>
    </header>
  );
};

export default Dashboard;
