import styled from "styled-components";
import SummaryCards from "../../Components/SummaryCards";

const SalesContainer = styled.div`
  width: 100%;

  .sales-summary {
    display: flex;
    justify-content: space-between;
  }
`;

function Sales() {
  return (
    <SalesContainer>
      <div className="sales-summary">
        <h2>Sales Summary</h2>
        <button>Criar novo PV</button>
      </div>
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

      <div className="card">
        <h3>Total Orders</h3>
        <p>150</p>
      </div>
      <div className="card">
        <h3>New Customers</h3>
        <p>20</p>
      </div>
    </SalesContainer>
  );
}

export default Sales;
