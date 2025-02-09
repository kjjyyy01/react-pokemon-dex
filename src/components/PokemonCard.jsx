import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addPokemon } from "../redux/slices/pokemonSlices";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  return (
    //* MOCK_DATA에서 하나씩 순회한 포켓몬 id를 pokemon으로 설정
    <li>
      <Link to={`/detail?pokemon=${pokemon.id}`}>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <h3>{pokemon.korean_name}</h3>
        <p>No.{pokemon.id.toString().padStart(3, "0")}</p>
      </Link>
      <button onClick={() => dispatch(addPokemon(pokemon))}>추가</button>
    </li>
  );
};

export default PokemonCard;
