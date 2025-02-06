import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    //* MOCK_DATA에서 하나씩 순회한 포켓몬 id를 pid로 설정
    <Link to={`/detail?pokemon=${pokemon.id}`}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <p>No.{pokemon.id.toString().padStart(3, "0")}</p>
    </Link>
  );
};

export default PokemonCard;
