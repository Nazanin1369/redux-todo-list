import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => this.props.toggleTodoItem(todo.id)}
            className={todo.completed ? "complete" : "un-complete"}
          >
            {todo.text}{" "}
            <button
              className="delete-btn"
              onClick={() => this.props.removeTodoItem(todo.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
