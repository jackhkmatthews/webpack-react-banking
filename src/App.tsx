import { hot } from "react-hot-loader/root";
import React from "react";

import { Page } from "./components/Page/Page.styled";
import { AccountProvider } from "./types/mockly";
import * as S from "./App.styled";
import { useFetch } from "./hooks/useFetch";

const mockProvider: AccountProvider = {
  title: "Monzo",
  account_number: "12345678",
  sort_code: "12-34-56",
  description: "Current Account",
};

const App = () => {
  const fetchState = useFetch(
    "http://www.mocky.io/v2/5c62e7c33000004a00019b05"
  );
  console.log(fetchState);
  return (
    <Page>
      <S.TopAccountCard
        title={mockProvider.title}
        accountNumber={mockProvider.account_number}
        type={mockProvider.description}
        sortCode={mockProvider.sort_code}
      />
    </Page>
  );
};

export default hot(App);
