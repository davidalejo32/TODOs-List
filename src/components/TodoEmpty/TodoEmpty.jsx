import React from "react";
import "./TodoEmpty.scss";


function TodoEmpty() {
  return (
    <div className="empty">
      <p className="empty__title">¡let's go!</p>
      <p className="empty__text">add your first TODO</p>
    </div>
  )
}

export {TodoEmpty}