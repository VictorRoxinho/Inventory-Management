import styled from "styled-components";
import { useState } from "react";

// Todo: Add a animation to the sidebar when it opens and closes

const SideNav = styled.nav`
  width: 250px;
  height: 100vh;
  background-color: #fff;
  border-right: 3px solid #e0e0e0;
  gap: 2rem;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  font-family: "Public Sans", sans-serif;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.1rem;
    color: #8b909a;
    font-weight: 400;
  }

  h3 {
    font-size: 0.7rem;
    color: #8b909a;
  }

  display: flex;
  flex-direction: column;

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem;
  }

  .logo button {
    margin-top: 0.2rem;
    margin-left: 0.3rem;
  }

  .minimize-icon {
    transition: all 0.2s ease-in-out;
    &:hover {
      color: black;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      transform: scale(1.05);
    }
  }

  .company-name {
    display: flex;
    align-items: center;
  }

  .company-name img {
    width: 35px;
    height: 30px;
    margin-right: 0.5rem;
  }

  .menu-title {
    margin-left: 1.7rem;
  }

  .menu-item {
    display: flex;
    margin: 1rem;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #f5f5f5;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      transform: scale(1.05);
    }
  }
`;

const MinimizedSideNav = styled.nav`
  width: 120px;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100vh;
  background-color: #fff;
  border-right: 3px solid #e0e0e0;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.08); // sombra na borda direita
  gap: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem;
    gap: 1rem;
  }

  .minimize-icon {
    transition: all 0.2s ease-in-out;
    &:hover {
      color: black;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      transform: scale(1.05);
    }
  }

  .company-name img {
    width: 55px;
    height: 50px;
  }

  .menu-shortcut {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 8px;
    }

    img {
      width: 30px;
      height: 30px;
      transition: all 0.2s ease-in-out;
    }
    img:hover {
      transform: scale(1.3);
    }
  }
`;

function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  const togglesidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <SideNav>
          <div className="logo">
            <div className="company-name">
              <img src="./logo.png" alt="" />
              <h1>Engage</h1>
            </div>
            <button
              style={{ border: "none", background: "none", cursor: "pointer" }}
              className="minimize-icon"
              onClick={togglesidebar}
            >
              <img src="./minimize.svg" alt="" />
            </button>
          </div>
          <div className="menu-title">
            <h3>MAIN MENU</h3>
            <div className="menu-item">
              <img src="./home-icon.svg" alt="" />
              <h2>Home</h2>
            </div>
            <div className="menu-item">
              <img src="./sales-icon.svg" alt="" />
              <h2>Vendas</h2>
            </div>
            <div className="menu-item">
              <img src="./customers-icon.svg" alt="" />
              <h2>Clientes</h2>
            </div>
            <div className="menu-item">
              <img src="./products-icon.svg" alt="" />
              <h2>Produtos</h2>
            </div>
            <div className="menu-item">
              <img src="./reports-icon.svg" alt="" />
              <h2>Relatórios</h2>
            </div>
          </div>
          <div className="menu-title">
            <h3>PRODUTOS</h3>
            <div className="menu-item">
              <img src="./home.svg" alt="" />
              <h2>Lista de Produtos</h2>
            </div>
            <div className="menu-item">
              <img src="./home.svg" alt="" />
              <h2>Adicionar novo</h2>
            </div>
          </div>
        </SideNav>
      ) : (
        <MinimizedSideNav>
          <div className="logo">
            <div className="company-name">
              <img src="./logo.png" alt="" />
            </div>
            <button
              style={{
                rotate: "180deg",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
              className="minimize-icon"
              onClick={togglesidebar}
            >
              <img src="./minimize.svg" alt="" />
            </button>
          </div>
          <div className="menu-shortcut">
            <button>
              <img src="/home-icon.svg" alt="" />
            </button>
            <button>
              <img src="/sales-icon.svg" alt="" />
            </button>
            <button>
              <img src="/customers-icon.svg" alt="" />
            </button>
            <button>
              <img src="/products-icon.svg" alt="" />
            </button>
            <button>
              <img src="/reports-icon.svg" alt="" />
            </button>
          </div>
        </MinimizedSideNav>
      )}
    </>
  );
}

export default SideBar;
