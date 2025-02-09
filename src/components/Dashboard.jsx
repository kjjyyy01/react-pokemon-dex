import { useDispatch, useSelector } from "react-redux";
import { cancelPokemon } from "../redux/slices/pokemonSlices";
import {
  StCard,
  StCardName,
  StCardNumber,
  StDashboardUl,
  StHeader,
  StImg,
  StLink,
  StListButton,
  StTitle,
} from "./Style";

const Dashboard = () => {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.pokemon);

  const pokemonBallCount = 6 - selectedPokemon.length;

  return (
    <StHeader>
      <StTitle>나만의 포켓몬 도감</StTitle>
      <StDashboardUl>
        {selectedPokemon.map((pokemon) => (
          <StCard key={pokemon.id}>
            <StLink to={`/detail?pokemon=${pokemon.id}`}>
              <StImg src={pokemon.img_url} alt={pokemon.korean_name} />
              <StCardName>{pokemon.korean_name}</StCardName>
              <StCardNumber>No.{pokemon.id.toString().padStart(3, "0")}</StCardNumber>
            </StLink>
            <StListButton onClick={() => dispatch(cancelPokemon(pokemon.id))}>취소</StListButton>
          </StCard>
        ))}

        {pokemonBallCount > 0 &&
          Array(pokemonBallCount)
            .fill(null)
            .map((_, index) => (
              <li key={`${index}`}>
                <StImg src="/monsterBall-img.png" alt="빈 포켓볼" />
              </li>
            ))}
      </StDashboardUl>
    </StHeader>
  );
};

export default Dashboard;
