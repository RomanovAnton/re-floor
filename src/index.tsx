import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
