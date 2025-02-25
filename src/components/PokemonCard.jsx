import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../redux/slices/pokemonSlices";
import { StCard, StCardName, StCardNumber, StImg, StLink, StListButton } from "./Style";
import { toast } from "react-toastify";
import { usePokemonStorage } from "../hooks/usePokemonStorage";

//* 추가 버튼을 누르면 추가되는 로직을 dispatch를 통해 구현했고
//* useSelector를 통해 추가된 포켓몬 개수(길이)를 파악해 유효성 검사를 진행했습니다.
const PokemonCard = ({ pokemon }) => {
  usePokemonStorage();
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemon);

  const addPokemonHandler = () => {
    if (pokemonList.length >= 6) {
      toast.warn("최대 6마리까지 추가할 수 있습니다.");
      return;
    }

    if (pokemonList.find((poke) => poke.id === pokemon.id)) {
      toast.warn("이미 추가된 포켓몬입니다!");
      return;
    }

    dispatch(addPokemon(pokemon));
  };

  return (
    //* MOCK_DATA에서 하나씩 순회한 포켓몬 id를 pokemon으로 설정
    <StCard>
      <StLink to={`/detail?pokemon=${pokemon.id}`}>
        <StImg src={pokemon.img_url} alt={pokemon.korean_name} />
        <StCardName>{pokemon.korean_name}</StCardName>
        <StCardNumber>No.{pokemon.id.toString().padStart(3, "0")}</StCardNumber>
      </StLink>
      <StListButton onClick={addPokemonHandler}>추가</StListButton>
    </StCard>
  );
};

export default PokemonCard;
