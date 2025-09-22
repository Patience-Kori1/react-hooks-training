import { useState } from 'react'
import './App.css'
import Todo from './useStateComponents/Todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    < div className="App">
      <h2>Appli todo list</h2>

       <Todo/>

    </div>
  )
}

export default App
