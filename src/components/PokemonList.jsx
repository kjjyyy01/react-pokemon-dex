import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../../data/Mock_Data";
import styled from "styled-components";

const StListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const PokemonList = ({ selectedPokemon, setSelectedPokemon }) => {
  return (
    <main>
      <StListUl>
        {MOCK_DATA.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
            MOCK_DATA={MOCK_DATA}
          />
        ))}
      </StListUl>
    </main>
  );
};

export default PokemonList;
