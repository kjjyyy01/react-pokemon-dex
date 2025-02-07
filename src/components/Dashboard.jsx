import { Link } from "react-router-dom";
import styled from "styled-components";

const StDashboardUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dashboard = ({ selectedPokemon, setSelectedPokemon }) => {
  const pokemonBallCount = 6 - selectedPokemon.length;

  const cancelPokemon = (id) => {
    setSelectedPokemon(selectedPokemon.filter((pokemon) => pokemon.id !== id));
  };

  return (
    <header>
      <StDashboardUl>
        <h1>나만의 포켓몬 도감</h1>
        {selectedPokemon.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/detail?pokemon=${pokemon.id}`}>
              <img src={pokemon.img_url} alt={pokemon.korean_name} />
              <h3>{pokemon.korean_name}</h3>
              <p>No.{pokemon.id.toString().padStart(3, "0")}</p>
            </Link>
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
      </StDashboardUl>
    </header>
  );
};

export default Dashboard;
