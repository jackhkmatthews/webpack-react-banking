import React from "react";
import * as S from "./AccountCard.styled";

interface AccountCardProps {
  title: string;
  accountNumber: string;
  type: string;
  sortCode: string;
  className?: string;
}

export const AccountCard: React.FC<AccountCardProps> = ({
  title,
  accountNumber,
  type,
  sortCode,
  className,
}) => {
  return (
    <S.AccountCard className={className}>
      <p>{title}</p>
      <p>{accountNumber}</p>
      <p>{type}</p>
      <p>{sortCode}</p>
    </S.AccountCard>
  );
};
