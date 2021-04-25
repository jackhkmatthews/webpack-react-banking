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
      <S.Date>{date}</S.Date>
      <S.Category>
        <small>{category}</small>
      </S.Category>
      <S.Details>
        <S.Vendor>{description}</S.Vendor>
        <S.Amount green={value > 0}>
          {value}({currency})
        </S.Amount>
      </S.Details>
    </S.Transaction>
  );
};
