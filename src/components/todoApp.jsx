import React from "react";

import Todo from "./todo.jsx";

class TodoApp extends React.Component {
  render() {
    return (
      <div className="todo-container">
        <h1>Todo List</h1>
        <Todo store={this.props.store} />
      </div>
    );
  }
}

export default TodoApp;
