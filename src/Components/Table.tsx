import styled from "styled-components";
import TableButton from "./TableButton";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 13px;

  h2,
  h4 {
    font-weight: 400;
  }

  h4 {
    color: #8b909a;
  }

  .table-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #d9d9d9;
    padding: 1.5rem;
  }

  .table-top-actions {
    display: flex;
    gap: 0.5rem;
  }

  table {
    display: table;
    width: 100%;
    padding: 1rem 3rem;

    thead tr th {
      text-align: left;
    }
  }

  table tbody td {
    padding: 0.5rem 0;
    border-bottom: 1px solid #d9d9d9;
  }

  table thead th {
    padding-bottom: 1rem;
  }

  .table-footer {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1.5rem;
    border-top: 3px solid #d9d9d9;
  }

  .footer-left,
  .footer-right {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .table-search {
    border: 1px solid #53545c;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    transition: border-color 0.2s;
  }

  .table-search:focus-within {
    border-color: #5570f1;
    box-shadow: 0 0 0 2px #dbeafe;
  }
`;

interface TableProps {
  title?: string;
  headers: { label: string; icon?: string }[];
  rows: (string | number)[][];
}

function Table({ title, headers, rows }: TableProps) {
  return (
    <TableContainer>
      <div className="table-top">
        {title && <h2>{title}</h2>}
        <div className="table-top-actions">
          <div className="table-search">
            <img src="/search-icon.svg" alt="Pesquisar" />
            <input
              type="text"
              placeholder="Pesquisar"
              style={{ border: "none", outline: "none", marginLeft: "0.5rem" }}
            />
          </div>
          <TableButton variant="filter">Filtro</TableButton>
          <TableButton variant="calendar">Filtro</TableButton>
          <TableButton variant="export">Exportar</TableButton>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.label}>
                <span style={{ display: "inline-flex", alignItems: "center" }}>
                  {header.label}
                  {header.icon && (
                    <img
                      src={header.icon}
                      alt=""
                      style={{
                        marginLeft: "0.7rem",
                        cursor: "pointer",
                        height: "1em",
                      }}
                    />
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cidx) => (
                <td key={cidx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <div className="footer-left">
          <select
            style={{ border: "none", outline: "none", padding: "0.5rem" }}
          >
            <option value="">10</option>
            <option value="">15</option>
            <option value="">20</option>
          </select>
          <h4>Itens por página</h4>
        </div>
        <div className="footer-right">
          <select
            style={{ border: "none", outline: "none", padding: "0.5rem" }}
          >
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <h4>de 10 páginas</h4>
        </div>
      </div>
    </TableContainer>
  );
}

export default Table;
