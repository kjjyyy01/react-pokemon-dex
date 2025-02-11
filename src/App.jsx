import { Bounce, ToastContainer } from "react-toastify";
import GlobalStyle from "./components/GlobalStyle";
import Router from "./shared/Router";
import { Provider } from "react-redux";
import store from "./redux/config/store";

//* 최상위 컴포넌트인 App에 Provider로 하위 컴포넌트를 감싸줬다. store를 통해 reducer를 모두 공유할 수 있다.
//*ToastContainer를 통해 alert창 UI를 사용할 수 있게했다.
//* GlobalStyle을 통해 styled-components를 전역으로 설정 했다.
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
