import styled from "styled-components";

const Home = () => {
  return (
    <MainWraper>
      <div className="container">
        <div className="quiz_section"></div>
        <div className="winner_prices"></div>
      </div>
    </MainWraper>
  );
};

const MainWraper = styled.div`
  background-color: #252c4a;
  width: 100vw;
  height: 100vh;
  color: #acb1bd;
`;

export default Home;
