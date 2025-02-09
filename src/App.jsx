import { Bounce, ToastContainer } from "react-toastify";
import GlobalStyle from "./components/GlobalStyle";
import Router from "./shared/Router";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
