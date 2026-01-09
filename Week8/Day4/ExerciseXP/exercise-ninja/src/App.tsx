import  type { KeyboardEvent } from "react";
import './App.css'
import {useTodos} from "./todo-provider.tsx";

export function App() {
    const { todos, dispatch } = useTodos();

    function handleAddToDo(text:string) {
        dispatch({type: "ADD_TODO", payload:text})
    }

    function handleRemoveToDo(id: number) {
        dispatch({type: "REMOVE_TODO", payload:id})
    }

    function handleToggleTodo(id:number) {
        dispatch({type: "TOGGLE_TODO", payload:id})
    }

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id.toString()}>
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={() => handleToggleTodo(todo.id)}
                        />
                        {todo.text}
                        <button onClick={() => handleRemoveToDo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Add a new todo"
                onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
                    if (event.key === "Enter") {
                        handleAddToDo(event.currentTarget.value);
                        event.currentTarget.value = "";
                    }
                }}
            />
        </div>
    )

}

