import React from "react";
import './TodoSearch.scss';

function TodoSearch( {setSearchValue} ) {
  
  const inputText = (e) => {
    setSearchValue(e.target.value)
  }

  return(
    <div className="todoSeach">
      <input 
      className="todoSeach__input" 
      placeholder="Search task..." 
      type="text" 
      onChange={inputText} 
      
      />
      <i className='bx bx-search todoSeach__icon'></i>
    </div>
  );
}

export  { TodoSearch };