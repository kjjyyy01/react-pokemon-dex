import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { PokemonProvider } from "../context/PokemonContext";

const Dex = () => {
  return (
    <PokemonProvider>
      <Dashboard />
      <PokemonList />
    </PokemonProvider>
  );
};

export default Dex;
