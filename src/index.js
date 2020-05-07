import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./styles.css";

import todoAppStore from "./reducers/store";
import TodoApp from "./components/todoApp.jsx";

const store = createStore(todoAppStore);
const rootElement = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <TodoApp store={store} />
    </React.StrictMode>,
    rootElement
  );
};

store.subscribe(render);
render();
