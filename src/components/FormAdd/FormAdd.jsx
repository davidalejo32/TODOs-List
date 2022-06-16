import React from "react";
import './FormAdd.scss'
import { TodoContex } from "../../TodoContext";


function FormAdd () {

  const { setOpenModal, todoAdd} = React.useContext(TodoContex);

  const [txtValue, setTxtValue] = React.useState('');

  const textValue = (e) => {
    setTxtValue(e.target.value);
  }


  const addTask = (e) => {
    e.preventDefault();
    
    if(txtValue){
      todoAdd(txtValue);
      setOpenModal(false);
    }
  } 

  return (
    <div className="formAdd">
      <form className="formAdd__container" onChange={textValue} >
        <label className="formAdd__label"> new task</label>
        <textarea className="formAdd__textArea" placeholder="add new task"></textarea>

        <div className="formAdd__btn-container">
          <button className="formAdd__brt-cancle formAdd__brt" type="button" onClick={() => setOpenModal(false)}>cancel</button>
          <button className="formAdd__btn-add formAdd__brt" type="submit" onClick={(e) => addTask(e) }>add</button>
        </div>
      </form>
    </div>
  )
}

export { FormAdd }