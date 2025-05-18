import styled from "styled-components";

const TopBarContainer = styled.div`
  width: 100vw;
  height: 100px;

  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-left: 1.5rem;
  border-bottom: 3px solid #e0e0e0;
  font-family: "Poppins", sans-serif;
  background-color: #fff;

  h1 {
    font-weight: 500;
  }

  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    margin-left: 1.5rem;
    color: #8b909a;
    font-weight: 400;
  }
`;

function TopBar() {
  return (
    <TopBarContainer>
      <h1>Page Route</h1>
      <h3>
        <img src="./home-router-icon.svg" alt="" />
        <span>/</span>
        <span>Vendas</span>
      </h3>
    </TopBarContainer>
  );
}
export default TopBar;
