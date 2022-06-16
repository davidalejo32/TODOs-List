import React from "react";

import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoButtonAdd } from "../TodoButtonAdd/TodoButtonAdd";
import { ModalAdd } from "../ModalAdd/ModalAdd";
import { FormAdd } from "../FormAdd/FormAdd";
import { TodoContex } from "../../TodoContext/index.js";
import { TodoLoading } from "../TodoLoading/TodoLoading";
import { TodoEmpty } from "../TodoEmpty/TodoEmpty";
import { TodoError } from "../TodoError/TodoError";

function AppUI() {
	const {
		totalTask,
		completedTask,
		setSearchValue,
		todosSearched,
		todoComplete,
		todoRemove,
		openModal,
		loading,
		error,
		searchValue,
	} = React.useContext(TodoContex);

	return (
		<React.Fragment>
			<TodoCounter totalTask={totalTask} completedTask={completedTask} />
			<TodoSearch setSearchValue={setSearchValue} />

			<TodoList>

				{loading && new Array(5).fill().map((skeleton, indx) => <TodoLoading  key={indx} />)}
				{(!todosSearched.length && !error && !searchValue.length && !loading) && <TodoEmpty/>}
				{error && <TodoError />}

				{todosSearched.map((todo) => (
					<TodoItem
						key={todo.id}
						text={todo.text}
						id={todo.id}
						completed={todo.completed}
						todoComplete={todoComplete}
						todoRemove={todoRemove}
					/>
				))}
			</TodoList>

			{openModal && (
				<ModalAdd>
					<FormAdd />
				</ModalAdd>
			)}

			<TodoButtonAdd />
		</React.Fragment>
	);
}

export { AppUI };
