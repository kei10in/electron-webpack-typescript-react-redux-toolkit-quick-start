import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, AnyAction } from "redux";

interface State {
  name: string;
}

const reducer = (state: State | undefined, action: AnyAction): State => {
  return {
    name: "name",
  };
};

const store = createStore(reducer, {
  name: "electron-webpack",
});

ReactDOM.render(
  <Provider store={store}>
    <div>
      <p>Welcome to your new project!</p>
      <p>
        Get qwdqwd now and take advantage of the great documentation at hand.
      </p>
      <div>
        <button onClick={() => open("https://webpack.electron.build")}>
          Documentation
        </button>
        <button onClick={() => open("https://electron.atom.io/docs/")}>
          Electron
        </button>
      </div>
      <ul>
        <li>
          electrion-webpack v{require("electron-webpack/package.json").version}
        </li>
        <li>electron v{process.versions.electron}</li>
      </ul>
      <p>
        This intitial landing page can be easily removed from{" "}
        <code>src/renderer/index.tsx</code>.
      </p>
    </div>
  </Provider>,
  document.getElementById("app")
);

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept();
}
