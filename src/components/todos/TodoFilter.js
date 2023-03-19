import React, {useContext} from 'react';
import {TodoContext} from '../../context/TodoContext';

function TodoFilters() {
    const {filter, setFilter} = useContext(TodoContext);

    return (
        <div className="flex p-margin-top-3">
            <div className="show-text p-margin-right-1">Show:</div>
            <div
                className= {"p-margin-right-1 " + (filter === 'all' ? 'link' : 'clickable')}
                onClick={() => setFilter('all')}
            >
                All
            </div>
            <div
                className={"p-margin-right-1 " + (filter === 'completed' ? 'link' : 'clickable')}
                onClick={() => setFilter('completed')}
            >
                Completed
            </div>
            <div
                className={"p-margin-right-1 " + (filter === 'incomplete' ? 'link' : 'clickable')}
                onClick={() => setFilter('incomplete')}
            >
                Incomplete
            </div>
        </div>
    );
}

export default TodoFilters;
