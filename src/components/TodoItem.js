import React from 'react';

const TodoItem = (props) => {
    return (
        <li className="list-group-item d-flex flex-row justify-content-between align-items-center ">
        <span>x</span>
            <span>
                <input type="checkbox" className="mx-3"/>
                <button className="btn btn-sm btn-danger">delete</button>
            </span>
        </li>
    )
}

export default TodoItem;