import React from "react";
import * as S from "./AccountCard.styled";

interface AccountCardProps {
  balance: number;
}

export const AccountCard: React.FC<AccountCardProps> = ({ balance }) => {
  return <S.AccountCard>{balance}</S.AccountCard>;
};
