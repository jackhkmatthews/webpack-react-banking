import { hot } from "react-hot-loader/root";
import React from "react";

import { Page } from "./components/Page/Page.styled";
import { Transactions } from "./components/Transactions/Transactions";
import { MocklyFetchState } from "./types/mockly";
import * as S from "./App.styled";
import { FetchStatus, useFetch } from "./hooks/useFetch";

const MOCKLY = "http://www.mocky.io/v2/5c62e7c33000004a00019b05";

const App = () => {
  const {
    data: { provider, transactions, balance },
    status,
  }: MocklyFetchState = useFetch(MOCKLY);

  return (
    <Page>
      {status === FetchStatus.FETCHING && <p>Loading...</p>}
      {status === FetchStatus.FETCHED && (
        <>
          <h1>{provider.description}</h1>
          <h2>Account details</h2>
          <S.TopAccountCard
            amount={balance.amount}
            currency={balance.currency_iso}
            title={provider.title}
            accountNumber={provider.account_number}
            sortCode={provider.sort_code}
          />
          <Transactions transactions={transactions} />
        </>
      )}
      {status === FetchStatus.ERROR && (
        <p>Error fetching data. Please try again</p>
      )}
    </Page>
  );
};

export default hot(App);
