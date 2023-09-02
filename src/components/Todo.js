import React from 'react';
import TodoItem from './Todo';

export default function Todos(props) {
  return (
    <div className='container my-3'>
       <h3 className='text-center my-3'>Todo List</h3>
       {props.todos.length === 0 ? (
         <h2>No Item in Todo List</h2>
       ) : (
         props.todos.map((todo) => (
           <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} />
         ))
       )}
    </div>
  );
}
