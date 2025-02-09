import { Provider } from "react-redux";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import store from "../redux/config/store";

const Dex = () => {
  return (
    <Provider store={store}>
      <Dashboard />
      <PokemonList />
    </Provider>
  );
};

export default Dex;
