import { useState } from 'react'
import '../App.css'
import ClasseState from './ClasseState'
import FunctionState from './FunctionState'

function AppHookFtClass() {
  const [count, setCount] = useState(0)

  return (
    < div className="App">

      <ClasseState/>

      <h2> useState Hooks </h2>

      <ClasseState/>
      <FunctionState/>

    </div>
  )
}

export default AppHookFtClass
