import React from "react";

import TodoList from "./todoList.jsx";

class Todo extends React.Component {
  addTodoItem() {
    this.props.store.dispatch({
      type: "ADD_TODO",
      text: this.input.value,
      id: Math.random(100)
    });

    this.input.value = "";
  }

  removeTodoItem(id) {
    this.props.store.dispatch({
      type: "REMOVE_TODO",
      id
    });

    this.input.value = "";
  }

  toggleTodoItem(id) {
    this.props.store.dispatch({
      type: "TOGGLE_TODO",
      id
    });
  }

  handleKeyPress(event) {
    event.persist();
    if (event.keyCode === 13) {
      this.addTodoItem();
    }
  }

  render() {
    console.log(this.props.store.getState());
    return (
      <React.Fragment>
        <div className="todo-inputter">
          <input
            type="text"
            placeholder="What needs to be done?"
            onKeyDown={e => this.handleKeyPress(e)}
            ref={node => (this.input = node)}
          />
        </div>
        <TodoList
          todos={this.props.store.getState().todos}
          removeTodoItem={id => this.removeTodoItem(id)}
          toggleTodoItem={id => this.toggleTodoItem(id)}
        />
      </React.Fragment>
    );
  }
}

export default Todo;
