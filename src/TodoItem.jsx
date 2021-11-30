import React from "react";
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="todo-item">
      <span className={() => {
        if (props.completed) {
          return "completed"
        } else {
          return ""
        }
      }}>
        {props.text} {props.completed.completed}</span>
      {console.log(props.completed)}

      <li className="fa fa-times-circle trasIconRight"></li>
    </li>
  );
}

export { TodoItem };
