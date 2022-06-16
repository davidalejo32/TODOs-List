import React from "react";
import { useStorageLocal } from "./useStorageLocal"

const TodoContex = React.createContext();


function TodoProvider (props) {

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const { 
    valueLocal: item, 
    saveItem: setItem,
    loading,
    error 
  } = useStorageLocal("TODOS_V1", [],);


  const completedTask = item.filter((todo) => todo.completed).length;
  const totalTask = item.length;

  const todoComplete = (id) => {
    const newTasks = [...item];
    const taskIndex = newTasks.findIndex((todo) => todo.id === id);

    if (newTasks[taskIndex].completed) {
      newTasks[taskIndex].completed = false;
    } else {
      newTasks[taskIndex].completed = true;
    }

    setItem(newTasks);
  };

  const todoRemove = (id) => {
    const newTasks = [...item];
    const taskIndex = newTasks.findIndex((todo) => todo.id === id);

    newTasks.splice(taskIndex, 1);
    setItem(newTasks);
  };

  const todoAdd = (text) => {

    let id;

    if (item.length > 0) {
      id = item[item.length - 1].id + 1
    } else {
      id = 1;
    }

    const newTasks = [...item];
    newTasks.push({ id, text, completed: false })
    setItem(newTasks)
  }

  let todosSearched = [];

  if (searchValue.length !== 0) {
    todosSearched = item.filter((todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    todosSearched = item;
  }


  return (
    <TodoContex.Provider value={{
      totalTask,
      completedTask,
      setSearchValue,
      todosSearched,
      todoComplete,
      todoRemove,
      openModal,
      setOpenModal,
      todoAdd,
      loading,
      error,
      searchValue
    }}>
      {props.children}
    </TodoContex.Provider>
  )

}


export { TodoContex, TodoProvider }