import React from "react";
import './TodoItem.css';
function TodoItem(props) {
  let checkIconClass =()=>{return props.completed?'checkIconIncomplete':'checkIconComplete'}
  let completarClass =()=>{return props.completed?'completed':'not-completed'}
  let onComplete = ()=>{
    props.completeTodo(props.text)
  }
  let onDelete =()=>{
    props.deleteTodo(props.text)
  }

  return (
    <li className={"todo-item " +completarClass()}>
      <i className={"fa fa-check-circle " +checkIconClass() } onClick={onComplete} ></i>      
        <span>{props.text} </span> 
      <i className="fa fa-times-circle trashIconRight" onClick={onDelete}></i>
    </li>
  );
}

export { TodoItem };
