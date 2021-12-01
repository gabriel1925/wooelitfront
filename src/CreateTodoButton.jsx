import React from "react";
import './CreateTodoButton.css';
function CreateTodoButton(props) {
  return (
    <React.Fragment>
      <div className="tCenter">
       <button className="create-todo-button"><i className="fa fa-plus"></i></button>
      </div>
    </React.Fragment>
    


  );
}

export { CreateTodoButton };
