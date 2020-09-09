import React from 'react'
import ToDoCard from './ToDoCard'

const CompletedContainer = (props) => {
    console.log(props)
    let arrTodo = props.todos.map(todo => <ToDoCard handleRemoveTodo={props.handleRemoveTodo}handleCompleteChange={props.handleCompleteChange}key={todo.title} todo={todo}/>)
    return (
        <div>
            <h1>Completed Todos</h1>
            {/* Render ToDo Card for each ToDo */}
             {arrTodo}
        </div>
    )
}

export default CompletedContainer