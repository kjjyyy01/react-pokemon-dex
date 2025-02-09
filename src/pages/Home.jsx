import { useNavigate } from "react-router-dom";
import { HomeWrapper, PokemonLogo, StartDexButton } from "../components/Style";

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
