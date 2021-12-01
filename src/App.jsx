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
      <div className="container-fluid">
        <div className="row m-3">
          <div className="col-sm-6 p-2 colRow searchHeight">
            <TodoCounter />
            <TodoSearch />
          </div>
          <div className="col-sm-6 p-2 colRow "> 
            <TodoList/>
          </div>
            <CreateTodoButton />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
