import React from "react";
import './TodoItem.scss';

function TodoItem( {text, id, completed, todoComplete, todoRemove} ) {

  return(
    <li className="todoItem">
      <label className="control control-checkbox">
          <input type="checkbox" defaultChecked={completed} onClick={() => todoComplete(id)}/>
          <div className="control_indicator"></div>
      </label>

      <div className="todoItem__container">
        <p className={`todoItem__text ${completed ? 'todoItem__text-completed' : ''} `}>{text}</p>
        <i className='bx bxs-trash  todoItem__icon' onClick={()=>{todoRemove(id)}}></i>
      </div>
    </li>
  );
}

export { TodoItem }