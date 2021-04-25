import styled from "styled-components";

interface AmountProps {
  green: boolean;
}

export const Transaction = styled.div`
  padding: 20px;
`;

export const Date = styled.p`
  margin: 0;
  color: grey;
`;

export const Category = styled.p`
  margin: 0;
  color: grey;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Vendor = styled.p`
  margin: 0;
`;

export const Amount = styled.p<AmountProps>`
  margin: 0;
  color: ${(props) => (props.green ? "green" : "black")};
`;
