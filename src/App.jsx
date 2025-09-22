import { useState } from 'react'
import './App.css'
import ClasseState from './components/ClasseState'

function App() {
  const [count, setCount] = useState(0)

  return (
    < div className="App">
      <h1> useState Hooks </h1>

      <ClasseState/>

    </div>
  )
}

export default App
