import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";
import "./style/App.css";

const store = createStore(reducers, applyMiddleware(thunk));

createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
