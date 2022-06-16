import React from "react";
import './TodoList.scss'

function TodoList(props) {
  return (
    <section className="TodoList">
      <ul className="TodoList__container">
        {props.children}
      </ul>
    </section>
  )

}

export { TodoList }