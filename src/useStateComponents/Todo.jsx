import {v4 as uuidv4} from "uuid"
import React, {useState} from 'react'
import AddTodoForm from './AddTodoForm'

const Todo = () => {

    const [warning, setWarning] = useState(false);

    const [todos, setTodos] = useState ([
        {id:1, todo: "Acheter du lait"},
        {id:2, todo: "Acheter du pain"}
    ])

    const myTodos = todos.map(todo => {
        return(
            <li className="list-group-item" key={todo.id}> {todo.todo}</li>
        )
    })
    // console.log(todos)

    const addNewTodo = (newTodo) => {
        const newId = uuidv4();
        if(newTodo !== '') 
        {
            warning && setWarning(false)
           
            setTodos([
                ...todos, 
                {
                    id: newId,
                    todo: newTodo,
                }
            ])

        } else {
            setWarning(true)
        }
        
    }

    const warningMsg  = warning && <div className=" alert alert-danger mt-4" role="alert">Veuillez indiquer un Todo</div>
    
  return (
    <div>
        <h3>{todos.length} To-do</h3>
        

        <ul className="list-group">
            {myTodos}
        </ul>
        {warningMsg}

        <AddTodoForm addNewTodo= {addNewTodo}/>
        
    </div>
  )
}

export default Todo
