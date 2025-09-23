// import { useState } from 'react'
// import { useEffect } from 'react'
import './App.css'
import ClassCount from './useEffect/ClassCount'
import FunctionCount from './useEffect/FunctionCount'


function App() {
  // const [count, setCount] = useState(0)

  return (
    < div className="App">
      <h2>useEffect</h2>

      <div>
        

        <div>
        <h4>Avec FunctionCount</h4>
        <FunctionCount/>

      <hr />

      </div>
        <h4>Avec ClassCount</h4>
        <ClassCount/>
      </div>

      

    </div>
  )
}

export default App
