import React, { Component } from 'react';

// Resources
import './App.css';
// Components
import { TodoForm, TodoList} from './components/todo'
import { addToDo, generateID, updateTodo, findByID, toggleTodo, removeTodo } from './lib/todoHelper'

export default class App extends Component {
    state = {
            todos: [],
            currentTodo: ''
        }
        // Binding methods to ensure it works
        // this.handleInputChange = this.handleInputChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleEmpty = this.handleEmpty.bind(this)
        // Handle Enter and submit action
    handleSubmit = (e) => {
            e.preventDefault()
            const newId = generateID()
            const newTodo = {
                id: newId,
                name: this.state.currentTodo,
                isDone: false,
            }
            const updatedTodos = addToDo(this.state.todos, newTodo)
            this.setState({
                todos: updatedTodos,
                currentTodo: '',
                errMessage: ''
            })
        }
        // Handle toggle todo 
    handleToggle = (id) => {
            const todo = findByID(id, this.state.todos)
            const toggled = toggleTodo(todo)
            const updatedTodos = updateTodo(this.state.todos, toggled)
            this.setState({
                todos: updatedTodos
            })
        }
        // Handle whenever text field changeed
    handleInputChange = (e) => {
            this.setState({
                currentTodo: e.target.value
            })
        }
        // Handle empty input will display error
    handleEmpty = (e) => {
            e.preventDefault()
            this.setState({
                errMessage: "Please input some todo task"
            })
        }
        // handle remove action
    handleRemove = (id) => {
        // e.preventDefault()
        const updatedTodos = removeTodo(this.state.todos, id)
        this.setState({
            todos: updatedTodos
        })
    }
    render() {
        const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmpty
        return ( 
                <div className = "App" >
                    <div className = "App-header" >
                        <h2> Firt React Todo App </h2> 
                </div> 
            {this.state.errMessage && <span className = "error-mess"> { this.state.errMessage } </span>} 
            <TodoForm
                handleInputChange = { this.handleInputChange }
                currentTodo = { this.state.currentTodo }
                handleSubmit = { submitHandler }>
            </TodoForm> 
            <TodoList
                handleToggle = { this.handleToggle }
                handleRemove = { this.handleRemove }
                todos = { this.state.todos }>
            </TodoList>
            
             </div>
            );
        }
    }