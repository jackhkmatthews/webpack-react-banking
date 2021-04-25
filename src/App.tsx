import { hot } from "react-hot-loader/root";
import React, { Component } from "react";

import { Page } from "./components/Page/Page.styled";
import { AccountProvider } from "./types/mockly";
import * as S from "./App.styled";

const mockProvider: AccountProvider = {
  title: "Monzo",
  account_number: "12345678",
  sort_code: "12-34-56",
  description: "Current Account",
};

class App extends Component {
  render() {
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
  }
}

export default hot(App);
