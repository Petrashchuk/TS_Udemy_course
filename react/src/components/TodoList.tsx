import React from 'react';
import Todo from './Todo';

import './TodoList.css';

interface TodoListProps {
    items: { id: string; text: string }[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({items, onDeleteTodo}) => {
    return (
        <ul>
            {items.map(todo => <Todo todo={todo} onDeleteTodo={onDeleteTodo} />)}
        </ul>
    );
};

export default TodoList;
