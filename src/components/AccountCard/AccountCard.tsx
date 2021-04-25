import React from "react";
import * as S from "./AccountCard.styled";

interface AccountCardProps {
  accountNumber: string;
  amount: number;
  className?: string;
  currency: string;
  sortCode: string;
  title: string;
}

export const AccountCard: React.FC<AccountCardProps> = ({
  accountNumber,
  amount,
  className,
  currency,
  sortCode,
  title,
}) => {
  return (
    <S.AccountCard className={className}>
      <S.Header>{title}</S.Header>
      <S.Balance>
        <p>
          <small>Balance:</small>
        </p>
        <p>
          {amount} (<small>{currency}</small>)
        </p>
      </S.Balance>
      <S.Number>
        <p>
          <small>Acc number:</small>
        </p>
        <p>{accountNumber}</p>
      </S.Number>
      <S.Sort>
        <p>
          <small>Sort-code:</small>
        </p>
        <p>{sortCode}</p>
      </S.Sort>
    </S.AccountCard>
  );
};
