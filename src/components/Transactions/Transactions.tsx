import React, { useState } from "react";
import { MocklyTransaction } from "../../types/mockly";
import { sortTransactions } from "../../utils";
import { TransactionSort } from "../Sort/Sort";
import { Transaction } from "../Transaction/Transaction";
import { Sort } from "../Sort/Sort";
import * as S from "./Transactions.styled";

interface TransactionsProps {
  transactions: MocklyTransaction[];
  className?: string;
}

export const Transactions: React.FC<TransactionsProps> = ({
  transactions,
  className,
}) => {
  const [sort, setSort] = useState<TransactionSort>(TransactionSort.NEWEST);

  const sortedTrans = sortTransactions(transactions, sort);

  return (
    <>
      <Sort sort={sort} onSort={setSort} />
      <S.Transactions className={className}>
        {sortedTrans.map(
          ({ description, category_title, amount, id, date }) => (
            <ul key={id}>
              <li>
                <Transaction
                  description={description}
                  date={date}
                  category={category_title}
                  value={amount.value}
                  currency={amount.currency_iso}
                />
              </li>
            </ul>
          )
        )}
      </S.Transactions>
    </>
  );
};
