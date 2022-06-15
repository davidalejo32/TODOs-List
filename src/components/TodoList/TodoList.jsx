import React from "react";

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