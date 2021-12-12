import React from "react";
import { Button } from "react-bootstrap";
import "./TodoSearch.css";
import { TodoContext } from '../TodoContext/';

function TodoSearch() {
  return (
    <TodoContext.Consumer>
      {({
        searchValue,
        setSearchValue
        
      }) => {
        let onSearchValueChange = (event) => {
          // console.log(event.target.value);
          setSearchValue(event.target.value);
        }
        return (
          <React.Fragment>
            <div className="input-group mb-3 opacity-90 backcolor">
              <input
                type="text"
                className="form-control"
                placeholder="Busqueda"
                value={searchValue}
                onChange={onSearchValueChange}
              />
              <div className="input-group-append">
                <Button
                  className="btn btn-secondary"
                  type="button"
                >
                  <i className="fa fa-search" />
                </Button>
              </div>
            </div>
          </React.Fragment>
        )
      }}
    </TodoContext.Consumer>
  );
}

export { TodoSearch };