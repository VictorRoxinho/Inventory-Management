import styled from "styled-components";

import SideBar from "./SideBar";
import TopBar from "./TopBar";

const LayoutContainer = styled.div`
  display: flex;
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
