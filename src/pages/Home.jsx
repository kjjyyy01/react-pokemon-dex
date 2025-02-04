import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const StImg = styled.img`
  width: 600px;
  height: 300px;
  margin-bottom: 30px;
`;

const StButton = styled.button`
  cursor: pointer;
  background-color: #cc0000;
  color: #fff;
  border: none;
  padding: 7px 30px;
  border-radius: 5px;
  font-size: 1rem;

  &:hover {
    background-color: #395aa8;
    color: #fff;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <StDiv>
      <StImg src="/image/pokemon-logo-img.png" alt="포켓몬 로고" />
      <StButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        도감 시작하기
      </StButton>
    </StDiv>
  );
};

export default Home;
