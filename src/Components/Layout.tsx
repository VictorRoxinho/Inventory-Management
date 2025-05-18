import styled from "styled-components";

import SideBar from "./SideBar";
import TopBar from "./TopBar";

const LayoutContainer = styled.div`
  display: flex;
  background-color: #d9d9d9;
  min-height: 100vh;
  width: 100vw;

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .content {
    padding: 3rem;
  }
`;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <SideBar />
      <div className="main-content">
        <TopBar />
        <div className="content">{children}</div>
      </div>
    </LayoutContainer>
  );
}

export default Layout;
