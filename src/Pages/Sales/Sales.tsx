import styled from "styled-components";
import SummaryCards from "../../Components/SummaryCards";

const SalesContainer = styled.div`
  width: 100%;

  .sales-summary {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .cards-container {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
`;

function Sales() {
  return (
    <SalesContainer>
      <div className="sales-summary">
        <h2>Sales Summary</h2>
        <button>Criar novo PV</button>
      </div>
      <div className="cards-container">
        <SummaryCards
          icon="./sales-summary-icon.svg"
          title="Sales Summary"
          options={["Hoje", "Semana", "Mês", "Ano"]}
          info={[
            { label: "Pedidos", value: 50 },
            { label: "Pendentes", value: 5 },
            { label: "Cancelados", value: 2 },
          ]}
        ></SummaryCards>
        <SummaryCards
          icon="./sales-summary-icon.svg"
          title="Sales Summary"
          options={["Hoje", "Semana", "Mês", "Ano"]}
          info={[
            { label: "Entregues", value: 20 },
            { label: "Trânsito", value: 10 },
            { label: "Aguardando", value: 5 },
          ]}
        ></SummaryCards>
      </div>
    </SalesContainer>
  );
}

export default Sales;
