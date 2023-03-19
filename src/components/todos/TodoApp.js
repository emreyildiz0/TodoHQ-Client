import React, {useContext, useEffect} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilters from './TodoFilter';
import LogoutButton from './LogoutButton';
import { ReactComponent as Check } from '../../assets/group.svg';

function TodoApp() {

    return (
        <div className="container">
            <LogoutButton/>
            <Check/>
            <div className="title p-margin-top-2">Todo List</div>
            <TodoForm/>
            <TodoList/>
            <TodoFilters/>
        </div>
    );
}

export default TodoApp;
