import React from "react";
import './TodoCounter.scss';


function TodoCounter (props) {
  return(
    <div className="counter">
      <h2 className="counter__title"> <span>Task</span> Completed</h2>
      <h2 className="counter__task"> 2 <span>/</span> 5 </h2>
    </div>
  );
}

export { TodoCounter }