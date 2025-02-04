const PokemonCard = ({ data }) => {
  return (
    <>
      <li>
        <img src={data.img_url} alt="포켓몬 캐릭터 이미지" />
        <h3>{data.korean_name}</h3>
        <p>No.0{data.id}</p>
        <button>추가</button>
      </li>
    </>
  );
};

export default PokemonCard;
