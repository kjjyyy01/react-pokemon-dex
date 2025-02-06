import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const StTitle = styled.h1`
  font-size: 2rem;
  color: #cd3939;
`;

const Dashboard = ({ selectedPokemon, setSelectedPokemon }) => {
  const pokemonBallCount = 6 - selectedPokemon.length;

  const cancelPokemon = (id) => {
    setSelectedPokemon(selectedPokemon.filter((pokemon) => pokemon.id !== id));
  };

  return (
    <header>
      <StTitle>나만의 포켓몬 도감</StTitle>
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
