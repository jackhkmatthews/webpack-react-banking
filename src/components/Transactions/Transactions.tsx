import React, { useState } from "react";
import { MocklyTransaction } from "../../types/mockly";
import { sortTransactions } from "../../utils";
import { TransactionSort } from "../Sort/Sort";
import { Transaction } from "../Transaction/Transaction";
import { Sort } from "../Sort/Sort";
import * as S from "./Transactions.styled";
import { Limit } from "../Limit/Limit";

interface TransactionsProps {
  transactions: MocklyTransaction[];
  className?: string;
}

const DEFAULT_LIMIT = 10;

export const Transactions: React.FC<TransactionsProps> = ({
  transactions,
  className,
}) => {
  const [sort, setSort] = useState<TransactionSort>(TransactionSort.NEWEST);
  const [limit, setLimit] = useState<number>(DEFAULT_LIMIT);

  const sortedTrans = sortTransactions(transactions, sort).slice(0, limit);

  return (
    <>
      <S.Title>Transactions</S.Title>
      <S.Filtering>
        <Sort sort={sort} onSort={setSort} />
        <Limit limit={limit} onLimit={setLimit} />
      </S.Filtering>
      <S.Transactions className={className}>
        <S.TransList>
          {sortedTrans.map(
            ({ description, category_title, amount, id, date }) => (
              <S.TransListItem key={id}>
                <S.Trans
                  description={description}
                  date={date}
                  category={category_title}
                  value={amount.value}
                  currency={amount.currency_iso}
                />
              </S.TransListItem>
            )
          )}
        </S.TransList>
      </S.Transactions>
    </>
  );
};
