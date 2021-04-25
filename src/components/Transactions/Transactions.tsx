import React from "react";
import { MocklyTransaction } from "../../types/mockly";
import { Transaction } from "../Transaction/Transaction";
import * as S from "./Transactions.styled";

interface TransactionsProps {
  transactions: MocklyTransaction[];
  className?: string;
}

export const Transactions: React.FC<TransactionsProps> = ({
  transactions,
  className,
}) => {
  return (
    <S.Transactions className={className}>
      {transactions.map(({ description, category_title, amount, id }) => (
        <Transaction
          key={id}
          description={description}
          category={category_title}
          value={amount.value}
          currency={amount.currency_iso}
        />
      ))}
    </S.Transactions>
  );
};
