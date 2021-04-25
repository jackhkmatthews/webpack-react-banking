import { hot } from "react-hot-loader/root";
import React, { Component } from "react";

import { Title } from "./components/Title";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title title="Hello world" />
      </div>
    );
  }
}

export default hot(App);
