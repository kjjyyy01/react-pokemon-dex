import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img src="/image/pokemon-logo-img.png" alt="포켓몬 로고" />
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        도감 시작하기
      </button>
    </div>
  );
};

export default Home;
