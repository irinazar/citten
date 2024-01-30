import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./features/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </HashRouter>
);
