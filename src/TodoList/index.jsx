import React from "react";
import { TodoItem } from "../TodoItem";
import './TodoList.css'
import { Spinner } from 'react-bootstrap';
import { TodoContext } from '../TodoContext/';

function TodoList({ error, loading, todos, completeTodo, deleteTodo }) {

  return (
    <TodoContext.Consumer>
      {({ 
        loading,
        error,
        searchTodo,
        completeTodo,
        deleteTodo
      }) => (
        <React.Fragment>
          <h2 className="centerTodoList">TODOs</h2>
          <hr />
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <Spinner animation="border" variant="primary" />}
          {loading && <span className="">Loading...</span>}
          {(!loading && !searchTodo.length) && <p>¡Crea tu primer TODO!</p>}
          <ul className="todo-list">
            {searchTodo.map((todo, index) => (
              <TodoItem key={'todoItem' + index} completeTodo={completeTodo} deleteTodo={deleteTodo} id={index} text={todo.text} completed={todo.completed} />
            ))}
          </ul>
        </React.Fragment>
      )}
    </TodoContext.Consumer>

  );
}
export { TodoList };