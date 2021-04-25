import styled from "styled-components";

export const AccountCard = styled.div`
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  display: grid;
  grid-template-areas:
    "header header"
    "balance balance"
    "number sort";
`;

export const Header = styled.p`
  grid-area: header;
  text-align: right;
  margin: 0;
`;

export const Balance = styled.div`
  grid-area: balance;
`;

export const Number = styled.div`
  grid-area: number;
`;

export const Sort = styled.div`
  grid-area: sort;
`;
