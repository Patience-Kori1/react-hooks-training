import React, {useState} from 'react'

const AddTodoForm = ({addNewTodo}) => {

    const [ addTodo, setAddTodo ] = useState('');

    // console.log(addTodo);

    const handleTodo = (e) => {
        e.preventDefault()
        addNewTodo(addTodo)
        setAddTodo('')
    }

   

  return (
    <form className="mt-4" onSubmit ={handleTodo}>
        <div className="card card-body">
            <div className="form-group">

                <label htmlFor="">Ajouter Todo</label>

                <input 
                    type="text" 
                    className="form-control"
                    value={addTodo}
                    onChange= {(e)=> setAddTodo(e.target.value) }
                />

                <input type="submit" className="btn btn-success mt-4"/>

            </div>
        </div>

    </form>
  )
}

export default AddTodoForm