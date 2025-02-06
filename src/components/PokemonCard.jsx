import { Link } from "react-router-dom";
import styled from "styled-components";

const StLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const PokemonCard = ({ pokemon }) => {
  return (
    <StLink to="/detail">
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <p>{pokemon.id}</p>
    </StLink>
  );
};

export default PokemonCard;
