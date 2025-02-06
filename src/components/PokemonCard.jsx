import { Link } from "react-router-dom";
import styled from "styled-components";

const StLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const PokemonCard = ({ pokemon }) => {
  return (
    //* MOCK_DATA에서 하나씩 순회한 포켓몬 id를 pid로 설정
    <StLink to={`/detail?pokemon=${pokemon.id}`}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <p>No.{pokemon.id.toString().padStart(3, "0")}</p>
    </StLink>
  );
};

export default PokemonCard;
