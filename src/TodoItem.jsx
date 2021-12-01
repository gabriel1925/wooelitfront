import React from "react";
import './TodoItem.css';
let completar =(completado)=>{return completado?'completed':'not-completed'}
function TodoItem(props) {
  return (
    <li className={"todo-item " +completar(props.completed)}>
      <span>
        {props.text}</span>

      <i className="fa fa-times-circle trasIconRight"></i>
    </li>
  );
}

export { TodoItem };
