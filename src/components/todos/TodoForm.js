import React, {useState, useContext} from 'react';
import {TodoContext} from '../../context/TodoContext';

function TodoForm() {
    const [todoText, setTodoText] = useState('');
    const {addTodo} = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoText.trim()) {
            addTodo(todoText);
            setTodoText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new todo"
                className="input p-margin-top-2"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
        </form>
    );
}

export default TodoForm;
