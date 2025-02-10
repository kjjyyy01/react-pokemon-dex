import { Bounce, ToastContainer } from "react-toastify";
import GlobalStyle from "./components/GlobalStyle";
import Router from "./shared/Router";
import { Provider } from "react-redux";
import store from "./redux/config/store";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        theme="light"
        transition={Bounce}
      />
    </Provider>
  );
};

export default App;
