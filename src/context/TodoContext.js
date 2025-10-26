import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todomsg: "This is our todo",
            completed: false
        }
    ],
    addTodo : () => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleTodo : (id) => {}

})

export const useTodo = ()=>{
    return useContext(TodoContext);
}

export const Todoprovider = TodoContext.Provider