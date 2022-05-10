import React, {useState, ChangeEvent} from 'react';

import './NewTodo.css';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState('')

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue('')
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)

    return (
        <form onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" value={inputValue} onChange={onChange}/>
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
};

export default NewTodo;
