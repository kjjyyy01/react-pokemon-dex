import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  return (
    <>
      <img src="/image/monsterBall-img.png" alt="" />
      <h3>포켓몬 이름</h3>
      <p>타입</p>
      <p>설명글</p>
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로가기
      </button>
    </>
  );
};

export default Detail;
