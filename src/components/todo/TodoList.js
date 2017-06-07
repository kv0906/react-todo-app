import React from 'react'
import {TodoItem} from './TodoItem'


export const TodoList = (props) => {
  return (
    <div className="Todo-List">
        <ul className="List-Item">
          {props.todos.map(todo => 
          	<TodoItem  
	          	handleToggle={props.handleToggle}
	          	handleRemove={props.handleRemove} 
	          	key={todo.id} 
	          	{...todo}
	          	/>
          	)}
        </ul>
    </div>
  )

}
