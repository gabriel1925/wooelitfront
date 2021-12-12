import React from 'react';
import { TodoCounter } from "../TodoCounter/";
import { TodoSearch } from "../TodoSearch/";
import { TodoList } from "../TodoList/";
import { CreateTodoButton } from "../CreateTodoButton/";
import { TodoContext } from '../TodoContext/';
import './App.css'

function AppUI() {
  const {
    loading,
    setTodos,
    todos
  } = React.useContext(TodoContext);
  return (
    <div className="container-fluid">
      <div className="row m-3">
        <div className="col-sm-6 p-2 colRow searchHeight">
          <TodoCounter />
          <TodoSearch />
        </div>
              <div className={loading ? "col-sm-6 p-2 colRow text-center" : "col-sm-6 p-2 colRow "}>
                <TodoList />
              </div>
              <CreateTodoButton addTodo={setTodos} todos={todos} saveTodos={setTodos} />
      </div>
    </div>
  );
}
export { AppUI };