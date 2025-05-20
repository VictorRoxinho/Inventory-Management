import styled from "styled-components";
import SummaryCards from "../../Components/SummaryCards";
import Table from "../../Components/Table";
import TaskButton from "../../Components/TaskButton";

const SalesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .sales-summary {
    display: flex;
    justify-content: space-between;
  }

  .cards-container {
    display: flex;
    gap: 2rem;
  }
`;

const headers = [
  { label: "Cliente", icon: "./table-header-icon.svg" },
  { label: "Data de emissão", icon: "./table-header-icon.svg" },
  { label: "Categoria", icon: "./table-header-icon.svg" },
  { label: "Código", icon: "./table-header-icon.svg" },
  { label: "Total", icon: "./table-header-icon.svg" },
  { label: "Status", icon: "./table-header-icon.svg" },
];

const rows = [
  [
    "Villa de Imbassai",
    "12 Abril 2025 - 14:24",
    "Condomínio",
    "103040",
    "R$ 2.139,10",
    "Pendente",
  ],
  [
    "Residencial Sol Nascente",
    "10 Abril 2025 - 09:15",
    "Residencial",
    "103041",
    "R$ 1.850,00",
    "Entregue",
  ],
  [
    "Condomínio Mar Azul",
    "09 Abril 2025 - 16:40",
    "Condomínio",
    "103042",
    "R$ 3.200,50",
    "Cancelado",
  ],
  [
    "Edifício Bela Vista",
    "08 Abril 2025 - 11:05",
    "Comercial",
    "103043",
    "R$ 980,75",
    "Pendente",
  ],
  [
    "Residencial Jardim Europa",
    "07 Abril 2025 - 14:30",
    "Residencial",
    "103044",
    "R$ 2.500,00",
    "Entregue",
  ],
  [
    "Condomínio Porto Seguro",
    "06 Abril 2025 - 10:20",
    "Condomínio",
    "103045",
    "R$ 1.200,00",
    "Pendente",
  ],
];

function Sales() {
  return (
    <SalesContainer>
      <div className="sales-summary">
        <h2>Sales Summary</h2>
        <TaskButton variant="create">Criar novo Pedido de Venda</TaskButton>
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
      <Table title="Lista de Vendas" headers={headers} rows={rows}></Table>
    </SalesContainer>
  );
}

export default Sales;
