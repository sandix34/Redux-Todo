import React from 'react';

const TodoItem = ({todo}) => {
    return (
        <li className="list-group-item d-flex flex-row justify-content-between align-items-center list-group-item-action ">
        <span>{ todo.name }</span>
            <span>
                <input type="checkbox" className="mx-3"/>
                <button className="btn btn-sm btn-danger">delete</button>
            </span>
        </li>
    )
}

export default TodoItem;