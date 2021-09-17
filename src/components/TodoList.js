import React from 'react';
import Todo from './Todo';

export default function TodoList({ todoList, onCheckbtnClick }) {
    return (
        <>
          {
            todoList.map(todo =>
            <Todo
            key={todo.id}
            todo={todo}
            onCheckbtnClick={onCheckbtnClick}
            />)
        }
        </>
    )
}