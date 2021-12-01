import React from "react";
import './CreateTodoButton.css';
function CreateTodoButton(props) {
  let onClickButton = (msg) => {
    alert(msg);
  }
  return (
    <React.Fragment>
      <div className="tCenter">
       <button className="create-todo-button"
        onClick={()=>{onClickButton("Create Todo Button Clicked")}}>
       <i className="fa fa-plus"></i></button>
      </div>
    </React.Fragment>
    


  );
}

export { CreateTodoButton };
