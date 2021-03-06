import React from "react";
import './TodoCounter.scss';


function TodoCounter ( {totalTask, completedTask} ) {
  return(
    <div className="counter">
      <h2 className="counter__title"> <span>Task</span> Completed</h2>
      <h2 className="counter__task"> {completedTask} <span>/</span> {totalTask} </h2>
    </div>
  );
}

export { TodoCounter }