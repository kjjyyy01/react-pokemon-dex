import { useNavigate } from "react-router-dom";
import { HomeWrapper, PokemonLogo, StartDexButton } from "../components/Style";

//* useNavigate를 통해 Home에서 Dex로 이동하게 설정했다.
const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <PokemonLogo src="/pokemon-logo-img.png" alt="포켓몬 로고" />
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
