import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import App from "./App";

const Root = () => (
  <>
    <Normalize />
    <App />
  </>
);

ReactDOM.render(<Root />, document.getElementById("root"));
