import React from 'react'


export const TodoItem = (props) => {
	const {handleToggle, handleRemove, id,isDone, name} = props
  	return (
    	<li style={{textDecoration: isDone ? 'line-through' : 'none' }}>
			<button onClick={() => handleRemove(id)}>X</button>    	
	    	<input type="checkbox" onChange={() => handleToggle(id)} checked={isDone}/> 
	    	{name}
    	</li>
  	)
}
