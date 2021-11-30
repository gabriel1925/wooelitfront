import React from "react";
import './CreateTodoButton.css';
function CreateTodoButton(props) {
  return (
    <React.Fragment>
      <div className="w-100 addButton">
       <button className="btn btn-success rounded-circle btnAdd"><i className="fa fa-plus createButtonIcon"></i></button>
      </div>
    </React.Fragment>
    


  );
}

export { CreateTodoButton };
