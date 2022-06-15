import React from 'react';
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>

      </TodoList>

    </React.Fragment>
  );
}

export default App;
