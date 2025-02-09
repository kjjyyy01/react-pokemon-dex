import { useDispatch } from "react-redux";
import { addPokemon } from "../redux/slices/pokemonSlices";
import { StCard, StCardName, StCardNumber, StImg, StLink, StListButton } from "./Style";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  return (
    //* MOCK_DATA에서 하나씩 순회한 포켓몬 id를 pokemon으로 설정
    <StCard>
      <StLink to={`/detail?pokemon=${pokemon.id}`}>
        <StImg src={pokemon.img_url} alt={pokemon.korean_name} />
        <StCardName>{pokemon.korean_name}</StCardName>
        <StCardNumber>No.{pokemon.id.toString().padStart(3, "0")}</StCardNumber>
      </StLink>
      <StListButton onClick={() => dispatch(addPokemon(pokemon))}>추가</StListButton>
    </StCard>
  );
};

export default PokemonCard;
