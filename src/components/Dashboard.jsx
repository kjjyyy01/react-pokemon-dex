import styled from "styled-components";

const StHeader = styled.header`
  background-color: orange;
`;

const Dashboard = () => {
  return (
    <>
      <StHeader>
        <h1>나만의 포켓몬 도감</h1>
      </StHeader>
    </>
  );
};

export default Dashboard;
