import React from "react";
import { TodoItem } from "./TodoItem";
import './TodoList.css'
const todos = [
  {text: "Cebolla", completed: false},
  {text: "Tomate", completed: false},
  {text: "Aji", completed: true},
  {text: "Pimiento", completed: false},
  {text: "Pepino", completed: false},
  {text: "Lechuga", completed: false},
  {text: "Papa", completed: false},
  {text: "Camote", completed: false}
];
function TodoList(props) {
  return (
    <React.Fragment>
      <h2 className="centerTodoList">TODOs</h2>
      <hr />
      <ul>
          {todos.map((todo,index) => (
              <TodoItem key={index} text={todo.text} todo={todo} />
          ))}
      </ul>
    </React.Fragment>

    );
}
export { TodoList };