import React from "react";
import * as S from "./Transaction.styled";

interface TransactionProps {
  description: string;
  date: string;
  category: string;
  value: number;
  currency: string;
  className?: string;
}

export const Transaction: React.FC<TransactionProps> = ({
  description,
  date,
  category,
  value,
  currency,
  className,
}) => {
  return (
    <S.Transaction className={className}>
      <p>{date}</p>
      <p>{description}</p>
      <p>{category}</p>
      <p>{value}</p>
      <p>{currency}</p>
    </S.Transaction>
  );
};
