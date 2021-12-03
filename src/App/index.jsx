import React from "react";
import { TodoCounter } from "../TodoCounter/";
import { TodoSearch } from "../TodoSearch/";
import { TodoList } from "../TodoList/";
import { CreateTodoButton } from "../CreateTodoButton/";
import './App.css'
const defaultTodos = [
  {text: " cosa Cebolla", completed: false},
  {text: "Tomate", completed: false},
  {text: "Aji", completed: true},
  {text: "Pimiento", completed: false},
  {text: "Pepino", completed: false},
  {text: "Lechuga", completed: false},
  {text: "Papa", completed: false},
  {text: "Camote", completed: false}
];

function App(props) {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const todoTodos = todos.length;
  const Searchtodo = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeTodo = (text) => {
    const  todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    setTodos(newTodos);
  };  

  return (
      <div className="container-fluid">
        <div className="row m-3">
          <div className="col-sm-6 p-2 colRow searchHeight">
            <TodoCounter 
            total = {todoTodos}
            completed = {completedTodos}
            />
            <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
          </div>
          <div className="col-sm-6 p-2 colRow "> 
            <TodoList 
            todos={Searchtodo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            />
          </div>
            <CreateTodoButton addTodo={setTodos} todos={todos} />
        </div>
      </div>
  );
}

export default App;
