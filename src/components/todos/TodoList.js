import React, {useContext, useEffect} from 'react';
import {TodoContext} from '../../context/TodoContext';
import {ReactComponent as Delete} from '../../assets/path-copy.svg';

function TodoList() {
    const {todos, removeTodo, updateTodoStatus, getTodoList} = useContext(TodoContext);

    useEffect(() => {
        getTodoList()
    }, []);

    return (
        <div>
            {todos && todos.map((todo) => (
                <div className="flex flex-jc-between p-margin-bottom-1" key={todo.id}>
                    <div className="flex">
                        <input
                            type="checkbox"
                            className="checkbox p-margin-right-1"
                            checked={todo.completed}
                            onChange={() => {
                                updateTodoStatus(todo.id, todo.completed)
                            }}
                        />
                        <div className="todo-item">
                            <div>{todo.title}</div>
                        </div>
                    </div>
                    <div
                        className="cursor-pointer"
                        >
                        <Delete
                            onClick={() => removeTodo(todo.id)}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoList;
