import App from "./app/app";
import store from "./app/store";

import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept();
}
