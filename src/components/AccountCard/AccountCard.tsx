import React from "react";
import * as S from "./AccountCard.styled";

interface AccountCardProps {
  accountNumber: string;
  amount: number;
  className?: string;
  currency: string;
  sortCode: string;
  title: string;
  type: string;
}

export const AccountCard: React.FC<AccountCardProps> = ({
  accountNumber,
  amount,
  className,
  currency,
  sortCode,
  title,
  type,
}) => {
  return (
    <S.AccountCard className={className}>
      <p>{title}</p>
      <p>{accountNumber}</p>
      <p>{type}</p>
      <p>{sortCode}</p>
      <p>
        {amount} - {currency}
      </p>
    </S.AccountCard>
  );
};
