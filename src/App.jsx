import { useState } from 'react'
import './App.css'
import ClasseState from './components/ClasseState'
import FunctionState from './components/FunctionState'

function App() {
  const [count, setCount] = useState(0)

  return (
    < div className="App">
      <h1> useState Hooks </h1>

      <ClasseState/>
      <FunctionState/>

    </div>
  )
}

export default App
