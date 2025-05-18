import styled from "styled-components";

const SummaryCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  width: fit-content;
  padding: 1rem;
  color: #8b909a;

  h2 {
    font-weight: 400;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 1rem;
    margin-bottom: 1.5rem;

    select {
      padding: 0.5rem;
      border-radius: 5px;
      border: none;
      background-color: #f9f9f9;

      cursor: pointer;
    }

    img {
      width: 30px;
    }
  }

  .card-info {
    display: flex;
    align-items: center;
    gap: 4.5rem;
    padding-right: 2rem;

    p {
      font-size: 1.5rem;
      font-weight: 600;
      color: #000;
    }
  }
`;

type CardInfo = {
  label: string;
  value: string | number;
};

interface SummaryCardsProps {
  icon: string;
  title: string;
  options: string[];
  info: CardInfo[];
}

function SummaryCards({ icon, options, info }: SummaryCardsProps) {
  return (
    <SummaryCardsContainer>
      <div className="card-header">
        <img src={icon} alt="" />
        <select>
          {options.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="card-info">
        {info.map((item) => (
          <div key={item.label}>
            <h2>{item.label}</h2>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </SummaryCardsContainer>
  );
}

export default SummaryCards;
