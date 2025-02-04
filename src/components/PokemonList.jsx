import styled from "styled-components";

const StMain = styled.main`
  background-color: #f8f8f8;
`;
const StUl = styled.ul`
  background-color: green;
`;

const PokemonList = () => {
  return (
    <StMain>
      <StUl>
        <li>
          <h3>포켓몬 이름</h3>
          <p>번호</p>
          <button>추가</button>
        </li>
      </StUl>
    </StMain>
  );
};

export default PokemonList;
