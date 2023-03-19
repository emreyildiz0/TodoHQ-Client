import React, {createContext, useState, useContext} from 'react';
import {getTodos, createTodo, updateTodo, deleteTodo} from '../services/todos';
import {AuthContext} from "./AuthContext";

export const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const {token} = useContext(AuthContext);

    const getTodoList = async () => {
        const res = await getTodos(token);
        setTodos(res.data)
    }

    const addTodo = async (text) => {
        const res = await createTodo(text, token);
        setTodos([...todos, res]);
    };

    const updateTodoStatus = async (id, completed) => {
        await updateTodo(id, completed, token);
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !completed};
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const removeTodo = async (id) => {
        await deleteTodo(id, token);
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    const filteredTodos = () => {
        if (filter === 'all') {
            return todos;
        }
        return todos.filter(todo => filter === 'completed' ? todo.completed : !todo.completed);
    };

    const value = {
        todos: filteredTodos(),
        filter,
        setFilter,
        addTodo,
        updateTodoStatus,
        removeTodo,
        getTodoList
    };

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
};
export default TodoContextProvider
