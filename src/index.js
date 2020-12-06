import React from "react";
import ReactDOM from "react-dom";
import { ColorModeScript } from "@chakra-ui/core";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode="dark" />
    <App />
  </>,
  document.getElementById("root")
);

// serviceWorker.register();
