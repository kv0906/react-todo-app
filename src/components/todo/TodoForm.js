 import React from 'react'


export const TodoForm = (props) => {
	return ( <form className="Todo-Form" onSubmit={props.handleSubmit}>
    <button className="btn__addTask"onSubmit={props.handleSubmit}>
      Add Task
    </button>
    <input type="" onChange={props.handleInputChange} value={props.currentTodo}/>
  </form>
  )
}

// Specify PropTypes in React
// TodoForm.propTypes = {
//   currentTodo:  React.PropTypes.string
// }
