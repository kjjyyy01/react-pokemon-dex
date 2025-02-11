import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../../data/Mock_Data";
import { StListUl, StMain } from "./Style";

//* map메서드를 통해 MOCK_DATA에 있는 포켓몬을 화면에 렌더링해주는 로직입니다.
const PokemonList = () => {
  return (
    <StMain>
      <StListUl>
        {MOCK_DATA.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </StListUl>
    </StMain>
  );
};

export default PokemonList;
