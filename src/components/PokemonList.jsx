import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../../data/Mock_Data";

const PokemonList = ({ selectedPokemon, setSelectedPokemon }) => {
  const addPokemon = (id) => {
    if (selectedPokemon.length >= 6) {
      alert("최대 6마리까지 추가할 수 있습니다.");
      return;
    }

    if (selectedPokemon.find((pokemon) => pokemon.id === id)) {
      alert("이미 추가된 포켓몬입니다!");
      return;
    }

    //* 추가 버튼을 누르면, MOCK_DATA중에서 각각의 data id와 추가 버튼을 누른 data id가 같으면,
    //* setSelectedPokemon를 통해 selectedPokemon을 업데이트 한며 리렌더링이 발생한다.
    const addedList = MOCK_DATA.filter((data) => data.id === id);
    setSelectedPokemon([...selectedPokemon, ...addedList]);
  };

  return (
    <main>
      <ul>
        {MOCK_DATA.map((pokemon) => (
          <li key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
            <button onClick={() => addPokemon(pokemon.id)}>추가</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PokemonList;
