import { hot } from "react-hot-loader/root";
import React, { Component } from "react";

import { AccountCard } from "./components/AccountCard/AccountCard";
import { Page } from "./components/Page/Page.styled";

class App extends Component {
  render() {
    return (
      <Page>
        <AccountCard balance={30} />
      </Page>
    );
  }
}

export default hot(App);
