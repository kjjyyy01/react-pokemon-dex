import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../../data/Mock_Data";
import { Link } from "react-router-dom";

const StLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const PokemonList = () => {
  return (
    <main>
      <ul>
        {MOCK_DATA.map((data) => (
          <StLink to="/detail" key={data.id}>
            <PokemonCard data={data} />
          </StLink>
        ))}
      </ul>
    </main>
  );
};

export default PokemonList;
