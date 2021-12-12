import React from "react";
import { TodoContext } from '../TodoContext/';

function TodoCounter({ total, completed }) {
  return (
    <TodoContext.Consumer>
      {({ 
      completedTodos,
      todoTodos
     }) => (
        <React.Fragment>
          <h2 className="Title">Has completado {completedTodos} de {todoTodos} TODOs </h2>
          <hr />
        </React.Fragment>
      )}
    </TodoContext.Consumer>
  );
}
export { TodoCounter };
