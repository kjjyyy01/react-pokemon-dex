import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

//* Dex페이지에서는 대시보드와 포켓몬 리스트를 보여줘야하기 때문에 두 가지를 반환값으로 줬다.
const Dex = () => {
  return (
    <>
      <Dashboard />
      <PokemonList />
    </>
  );
};

export default Dex;
