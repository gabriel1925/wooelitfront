import React from "react";
import { Button } from "react-bootstrap";
import "./TodoSearch.css";
function TodoSearch(props) {
  return (
    <React.Fragment>
      {/* Create Input and integrated Button Search*/}
      <div className="input-group mb-3 opacity-90 backcolor">
        <input
          type="text"
          className="form-control "
          placeholder="Busqueda"
          // onChange={props.handleChange}
        />
        <div className="input-group-append">
          <Button
            className="btn btn-secondary"
            type="button"
            // onClick={props.handleClick}
          >
            <i className="fa fa-search" />
          </Button>
        </div>
      </div>




    </React.Fragment>
  );
}

export { TodoSearch };