import { hot } from "react-hot-loader/root";
import React from "react";

import { Page } from "./components/Page/Page.styled";
import { MocklyFetchState } from "./types/mockly";
import * as S from "./App.styled";
import { FetchStatus, useFetch } from "./hooks/useFetch";

const App = () => {
  const {
    data: { provider },
    status,
  }: MocklyFetchState = useFetch(
    "http://www.mocky.io/v2/5c62e7c33000004a00019b05"
  );
  return (
    <Page>
      {status === FetchStatus.FETCHED && (
        <S.TopAccountCard
          title={provider.title}
          accountNumber={provider.account_number}
          type={provider.description}
          sortCode={provider.sort_code}
        />
      )}
    </Page>
  );
};

export default hot(App);
