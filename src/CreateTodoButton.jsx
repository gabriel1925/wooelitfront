import React from "react";
import { Modal, Button } from "react-bootstrap";
import './CreateTodoButton.css';
function CreateTodoButton({addTodo, todos}) {
  const [show, setShow] = React.useState(false);
  const [todo, setTodo] = React.useState({text: '', completed: false});
  const handleClose = () => setShow(false);
  const buttonToggleShow = () => {
    show? setShow(false): setShow(true);
  };
  const activeButton = ()=>{
    return show?'activeButton':''
  }
  const onTodoChange = (e)=>{
    if (e.target.value !== '') {
      console.log(e.target.value);
    setTodo({text: e.target.value, completed: false});
    }else{
      setTodo({text: '', completed: false});
    }
  }
  const addTodoHandler = ()=>{
    if(todo.text !== ''){
      let todosAll = [...todos, todo];
      console.log(todosAll);
    addTodo(todosAll);
    handleClose();
    }else{
      alert('Please enter todo');
    }

  }
  
  return (
    <React.Fragment>
      <div className="tCenter">
        <button className={"create-todo-button " + activeButton() }
          onClick={ buttonToggleShow }>
          <i className="fa fa-plus "></i></button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Dialog className='m-0'>
          <Modal.Header closeButton>
            <Modal.Title>Agregar</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <input type="text" className="form-control" placeholder="Nuevo Todo" onChange={ onTodoChange } />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            <Button variant="success" onClick={addTodoHandler}>Guardar</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>

    </React.Fragment>



  );
}

export { CreateTodoButton };
