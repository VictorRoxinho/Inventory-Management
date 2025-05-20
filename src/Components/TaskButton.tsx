import styled from "styled-components";

const Icons = {
  create: "./plus-icon.svg",
  edit: "./edit-icon.svg",
  delete: "./delete-icon.svg",
};

const variantColors = {
  create: "#5570F1",
  edit: "#FFA500",
  delete: "#CC5F5F",
};

const TaskButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-weight: 500;
  color: #fff;
  background-color: #5570f1;
  cursor: pointer;
`;

interface TaskButtonProps {
  variant: "create" | "edit" | "delete";
  onClick?: () => void;
  children: React.ReactNode;
}

function TaskButton({ variant, onClick, children }: TaskButtonProps) {
  return (
    <TaskButtonContainer
      onClick={onClick}
      style={{ backgroundColor: variantColors[variant] }}
    >
      <img src={Icons[variant]} style={{ height: "20px" }} alt={variant} />
      {children}
    </TaskButtonContainer>
  );
}

export default TaskButton;
