import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../../data/Mock_Data";

const Detail = () => {
  const navigate = useNavigate();

  //* uesSearchParams를 통해 pid값을 추출해서 id에 저장
  //* obj에는 get함수를 가지고 있다.
  //* get은 url에서 값을 가져오는 함수다.
  const [obj] = useSearchParams();
  const id = obj.get("pokemon");

  //* MOCK_DATA에서 포켓몬 각각의 id와 pid값인 id를 비교해서 일치하는 첫 번째 객체만 추출함
  //* 추출한 객체로 Detail화면에 렌더링
  const pokemon = MOCK_DATA.find((data) => data.id.toString() === id);
  return (
    <>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <p>{pokemon.types}</p>
      <p>{pokemon.description}</p>
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
