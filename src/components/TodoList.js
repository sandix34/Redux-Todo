import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

const TodoList = ({todos}) => {
    return (
        <ul className="list-group">
        { todos && todos.map(t => (
            <TodoItem key={ t.name } todo={ t }/>
        )) }
        </ul>
    )
}

export default connect((state) => {
    const filter = state.filter;
    let todos;
    switch(filter) {
        
        case visibilityFilters.SHOW_DONE : {
            todos = state.todos.filter( t => t.done)
        }
        case visibilityFilters.SHOW_Active : {
            todos = state.todos.filter( t => !t.done)
        }
        default: todos = state.todos
    }

    return {
        todos
    }
})(TodoList);