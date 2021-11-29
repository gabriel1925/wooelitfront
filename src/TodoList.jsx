import React from "react";
import { TodoItem } from "./TodoItem";
const todos = [
  {text: "Cotar Cebolla", completed: false},
  {text: "Freir cebolla", completed: false},
  {text: "Apanar cebolla", completed: true}
];
function TodoList(props) {
  return (
    <ul>
        {todos.map((todo,index) => (
            <TodoItem key={index} text={todo.text} todo={todo} />
        ))}
    </ul>

    );
}
export { TodoList };