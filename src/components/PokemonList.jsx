import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../../data/Mock_Data";
import { StListUl, StMain } from "./Style";

const PokemonList = () => {
  return (
    <StMain>
      <StListUl>
        {MOCK_DATA.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} MOCK_DATA={MOCK_DATA} />
        ))}
      </StListUl>
    </StMain>
  );
};

export default PokemonList;
