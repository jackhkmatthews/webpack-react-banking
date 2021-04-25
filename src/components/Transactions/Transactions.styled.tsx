import styled from "styled-components";
import { Transaction } from "../Transaction/Transaction";

export const Transactions = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
`;

export const Title = styled.h2`
  margin: 40px 0 0;
`;

export const Filtering = styled.div`
  margin: 20px 0;
`;

export const TransList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TransListItem = styled.ol`
  list-style: none;
  padding: 0;
`;

export const Trans = styled(Transaction)`
  border-bottom: 1px solid lightgrey;
`;
