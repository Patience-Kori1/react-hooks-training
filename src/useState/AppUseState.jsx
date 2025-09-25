import { useState } from 'react'
import '../App.css'
import Todo from './Todo'


function AppUseState() {
  const [count, setCount] = useState(0)

  return (
    < div className="App">
      <h2>Appli todo list</h2>

       <Todo/>

    </div>
  )
}

export default AppUseState
