import React from "react";
import './TodoSearch.scss';

function TodoSearch() {
  return(
    <div className="todoSeach">
      <input className="todoSeach__input" placeholder="Search task..." type="text" />
      <i className='bx bx-search todoSeach__icon'></i>
    </div>
  );
}

export  { TodoSearch };