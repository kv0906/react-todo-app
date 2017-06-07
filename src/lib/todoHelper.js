export const addToDo = (list, item)  => list.concat(item)
// [...list, item] Spread operator in this case


// Generate unique ID for each task
export const generateID = () => Math.floor(Math.random() * 100000)
// Find by ID todo

export const findByID = (id, list) => list.find(item => item.id === id)

//toggle todo item
 export const toggleTodo = (todo) => ({
 	...todo,
 	isDone: !todo.isDone
 })
// Update todo

export const updateTodo = (list , updated ) => {
	const updatedIndex = list.findIndex(item => item.id === updated.id)
	return [
		...list.slice(0 , updatedIndex),
		updated,
		...list.slice(updatedIndex + 1)
	]
}

// Remove item from Todos

export const removeTodo = (list ,id) => {
	const removeIdx = list.findIndex(item => item.id === id)
	return [
		...list.slice(0 , removeIdx),
		...list.slice(removeIdx + 1) 
	]
}
