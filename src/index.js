import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import "./index.css";
import App from "./App";

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

const message = `
 * --------------------------------------------------------------------------- *

      _      _      _
    >(.)__ <(.)__ =(.)__     You are a curious one! For hiring or proposals
      (___/  (___/  (___/      send a message through the /contact section!
                                

 * --------------------------------------------------------------------------- *`;

console.log(message);
