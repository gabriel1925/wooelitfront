import React from "react";

function TodoCounter({ total, completed}) {
  return (
    <React.Fragment>
      <h2 className="Title">Has completado {completed} de {total} TODOs </h2>
      <hr />
    </React.Fragment>
    );
}
export {TodoCounter};
