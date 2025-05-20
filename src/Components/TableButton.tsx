import styled from "styled-components";

const TableButtonStyled = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.5rem;
  border: 1px solid #53545c;
  border-radius: 4px;
  font-weight: 700;
  color: #53545c;
  cursor: pointer;
`;

interface TableButtonProps {
  variant: "filter" | "calendar" | "export";
  onClick?: () => void;
  children: React.ReactNode;
}

function TableButton({ variant, onClick, children }: TableButtonProps) {
  let iconSrc = "";
  let alt = "";

  if (variant === "filter") {
    iconSrc = "/icons/filter-icon.svg";
    alt = "Filtro";
  } else if (variant === "calendar") {
    iconSrc = "/icons/filter-calendar.svg";
    alt = "Agenda";
  } else if (variant === "export") {
    iconSrc = "/icons/export-icon.svg";
    alt = "Exportar";
  }

  return (
    <TableButtonStyled onClick={onClick}>
      {iconSrc && <img src={iconSrc} style={{ height: "18px" }} alt={alt} />}
      {children}
    </TableButtonStyled>
  );
}

export default TableButton;
