import React from 'react';
import { TodoCounter } from "../TodoCounter/TodoCounter"
import { TodoSearch } from "../TodoSearch/TodoSearch"
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
    </React.Fragment>
  );
}

export default App;
