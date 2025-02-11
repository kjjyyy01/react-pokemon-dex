import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../../data/Mock_Data";
import {
  StCardName,
  StDetailDescription,
  StDetailImg,
  StDetailWrapper,
  StListButton,
  StType,
} from "../components/Style";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../redux/slices/pokemonSlices";
import { toast } from "react-toastify";
import { usePokemonStorage } from "../hooks/usePokemonStorage";

//* Detail에서 추가버튼을 누르면 대시보드에 추가할 수 있는 기능을 구현했다.
//* navigate를 사용해 Dex페이지로 되돌아 갈 수 있게 구현했다.
//* useSearchParams를 사용해 queryString에 들어갈 id 값을 추출해
//* MOCK_DATA에 있는 id와 비교하여 일치하는 것을 화면에 렌더링했습니다.
const Detail = () => {
  usePokemonStorage();
  const navigate = useNavigate();

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

  //* uesSearchParams를 통해 pid값을 추출해서 id에 저장
  //* obj에는 get함수를 가지고 있다.
  //* get은 url에서 값을 가져오는 함수다.
  const [obj] = useSearchParams();
  const id = obj.get("pokemon");

  //* MOCK_DATA에서 포켓몬 각각의 id와 pid값인 id를 비교해서 일치하는 첫 번째 객체만 추출함
  //* 추출한 객체로 Detail화면에 렌더링
  const pokemon = MOCK_DATA.find((data) => data.id.toString() === id);
  return (
    <StDetailWrapper>
      <StDetailImg src={pokemon.img_url} alt={pokemon.korean_name} />
      <StCardName>{pokemon.korean_name}</StCardName>
      <StType>속성: {pokemon.types}</StType>
      <StDetailDescription>{pokemon.description}</StDetailDescription>
      <StListButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로가기
      </StListButton>
      <StListButton onClick={addPokemonHandler}>추가</StListButton>
    </StDetailWrapper>
  );
};

export default Detail;
