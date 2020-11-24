import React, { Component } from 'react';
import TodoItem from './TodoItem';

class VisibleTodolist extends Component {
  componentDidUpdate = () => {
    window.localStorage.setItem('todos', JSON.stringify(this.props.todos));
  };

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleTodoState={this.props.toggleTodoState}
        deleteTodoState={this.props.deleteTodoState}
      />
    ));
  }
}

export default VisibleTodolist;
