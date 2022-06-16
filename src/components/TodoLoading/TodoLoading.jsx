import React from "react";
import "./TodoLoading.scss"

function TodoLoading(props) {
  return (
    <li className="todo-skeleton">
      <div className="todo-skeleton__input"></div>
    
    <div className="todo-skeleton__container">
       <p className="todo-skeleton__text">{props.text} </p>
    </div>
 </li>
  )
}

export {TodoLoading}