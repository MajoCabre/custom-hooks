import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {

    const [todos, distpatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo,
        };
        distpatch(action);
    };

    const handleDeleteTodo = (id) => {
        distpatch({
            type: "[TODO] Remove TODO",
            payload: id,
        });
    };

    const handleToggleTodo = (id) => {
        distpatch({
            type: "[TODO] Toggle Todo",
            payload: id,
        });
    };

    return {
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,

        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}