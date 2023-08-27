import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { BrowserRouter } from "react-router-dom";
import ThemeHandler from "./settings/ThemeHandler";

import "./index.css";

import App from "./App";
import store from "./store/store";

let persistor = persistStore(store);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}>
          <ThemeHandler />
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

const message = `
 * --------------------------------------------------------------------------- *

      _      _      _
    >(.)__ <(.)__ =(.)__     You are a curious one! For hiring or proposals
      (___/  (___/  (___/      send a message through the /contact section!
                                

 * --------------------------------------------------------------------------- *`;

console.log(message);
