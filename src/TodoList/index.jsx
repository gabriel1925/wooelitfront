import React from "react";
import { TodoItem } from "../TodoItem";
import './TodoList.css'

function TodoList({todos,completeTodo,deleteTodo}) {

  return (
    <React.Fragment>
      <h2 className="centerTodoList">TODOs</h2>
      <hr />
      <ul className="todo-list">
          {todos.map((todo,index) => (
              <TodoItem key={'todoItem' + index} completeTodo={completeTodo} deleteTodo={deleteTodo} id={index} text={todo.text} completed={todo.completed} />
          ))}
      </ul>
    </React.Fragment>

    );
}
export { TodoList };