import React from "react";
import {Todo as TodoType} from '../todo.model';

interface ITodo {
    onDeleteTodo: (id: string) => void;
    todo: TodoType
}

const Todo: React.FC<ITodo> = ({todo, onDeleteTodo}) => (
    <li key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={() => onDeleteTodo(todo.id)}>
            DELETE
        </button>
    </li>
)

export default Todo;