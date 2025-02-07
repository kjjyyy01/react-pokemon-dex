import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokemonLogo = styled.img`
  width: 1000px;
  height: 400px;
  margin-bottom: 30px;
`;

const StartDexButton = styled.button`
  background-color: #3d5ca6;
  padding: 15px 40px;
  border-radius: 10px;
  color: #ffcb05;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    background-color: #ffcb05;
    color: #3d5ca6;
    font-weight: 600;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <PokemonLogo src="/image/pokemon-logo-img.png" alt="포켓몬 로고" />
      <StartDexButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        도감 시작하기
      </StartDexButton>
    </HomeWrapper>
  );
};

export default Home;
