import React from 'react'

export default function TodoItem({todo,onDelete}) {
  return (
    <div>
      <h3>{todo.task} </h3>
       <p>  Status : {todo.done} </p>
       <button className="btn btn-danger mt-2 mb-5" onClick={ () => {onDelete(todo)}}>Delete </button>
    </div>
  )
}
