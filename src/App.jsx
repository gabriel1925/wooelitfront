import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
// import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import './App.css'
// const todos = [
//   {text: "Walk the dog", completed: false},
//   {text: "Walk the cat", completed: false},
//   {text: "Walk the horse", completed: true},
// ];

  

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList/>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
