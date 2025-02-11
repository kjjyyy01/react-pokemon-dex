import { Link } from "react-router-dom";
import styled from "styled-components";

export const StHeader = styled.header`
  background-color: #ffc76d;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 30px 0;
  border-radius: 10px;
`;

export const StTitle = styled.h1`
  font-size: 2rem;
  margin-top: 30px;
  color: #dc0000;
`;

export const StDashboardUl = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

export const StCard = styled.li`
  background-color: #ffd899;
  margin: 20px;
  padding: 50px 80px;
  border-radius: 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StCardName = styled.h3`
  font-size: 1.6rem;
`;

export const StCardNumber = styled.p`
  font-size: 1.2rem;
`;

export const StImg = styled.img`
  width: 100%;
  aspect-ratio: auto;
  object-fit: fill;
`;

export const StListButton = styled.button`
  background-color: #fe0000;
  padding: 10px 25px;
  border-radius: 10px;
  color: #ffcb05;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    background-color: #3d5ca6;
    color: #ffcb05;
    font-weight: 600;
  }
`;

export const StLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StMain = styled.main`
  width: 90%;
  height: 100%;
  background-color: #ffc76d;
  border-radius: 10px;
`;

export const StListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const PokemonLogo = styled.img`
  width: 1000px;
  height: 400px;
  margin-bottom: 30px;
`;

export const StartDexButton = styled.button`
  background-color: #3d5ca6;
  padding: 15px 40px;
  border-radius: 10px;
  color: #ffcb05;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    background-color: #ffcb05;
    color: #3d5ca6;
    font-weight: 600;
  }
`;

export const StDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
`;

export const StDetailImg = styled.img`
  width: 400px;
  height: 400px;
`;

export const StDetailDescription = styled.p`
  font-size: 1.6rem;
`;

export const StType = styled.p`
  font-size: 1.4rem;
`;
