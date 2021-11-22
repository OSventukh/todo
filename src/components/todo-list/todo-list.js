import React from "react";

import TodoListItem from "../todo-list-item/todo-list-item";

import './todo-list.css';


const TodoList = ({todos, onDeleted, onDone, onImportant}) => {

    const element = todos.map(item => {
        const {id, displayStyle, ...itemProps} = item;
        return <li key={id} style={{display: displayStyle}} className="list-group-item">
            <TodoListItem {...itemProps}
                onDeleted={() => onDeleted(id)}
                onDone={() => onDone(id)}
                onImportant={() => onImportant(id)}
                /></li>;
    })
    return (
        <ul className="list-group todo-list">
            {element}
        </ul>
    );
};

export default TodoList;