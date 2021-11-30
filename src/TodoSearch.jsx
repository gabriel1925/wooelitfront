import React from "react";
import { Button } from "react-bootstrap";
import "./TodoSearch.css";
function TodoSearch(props) {
  return (
    <React.Fragment>
      {/* Create Input and integrated Button Search*/}
      <div className="input-group mb-3 opacity-90">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          // onChange={props.handleChange}
        />
        <div className="input-group-append">
          <Button
            className="btn btn-secondary"
            type="button"
            id="button-addon2"
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