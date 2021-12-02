import React from "react";
import { TodoItem } from "./TodoItem";
import './TodoList.css'

function TodoList(props) {
  return (
    <React.Fragment>
      <h2 className="centerTodoList">TODOs</h2>
      <hr />
      <ul className="todo-list">
          {props.todos.map((todo,index) => (
              <TodoItem key={index} text={todo.text} completed={todo.completed} />
          ))}
      </ul>
    </React.Fragment>

    );
}
export { TodoList };