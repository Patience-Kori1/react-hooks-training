import './App.css'
import {useState, useCallback} from 'react'
import Button from './useCallback/Button'
import Count from './useCallback/Count'

function App() {
 
  const[countOne, setCountOne] = useState({value:0, btnColor:'success', increment:15})
  const[countTwo, setCountTwo] = useState({value:0, btnColor:'danger', increment:20})

  const incrementCountOne = useCallback(
      
      (val) => {
      console.log("Je suis dans incrementeCountOne")
      countOne.value >= 100 ? setCountOne({...countOne, value:100}) : setCountOne({...countOne, value: countOne.value + val})
    }, 

    [countOne]

  )

  const incrementCountTwo = useCallback(
    
      (val) => {
      console.log("Je suis dans incrementeCountOne")
      countTwo.value >= 100 ? setCountTwo({...countTwo, value:100}) :setCountTwo({...countTwo, value: countTwo.value + val})
    },

    [countTwo]
  )

  return (
    < div className="App">

        <h2>useCallback</h2>

        <div className='useCallbackApp'>
          <div className='useCallback'>

            {/* Premier bouton */}
            <Button 
              btnColor={countOne.btnColor} 
              increment={countOne.increment}
              handleClick = {incrementCountOne}
            > 

              Count 1

            </Button>
            <Count 
              count={countOne.value} 
              bgColor={countOne.btnColor} 
              text="countOne"
            />
          </div>

          <div className='useCallback'>
            {/* Deuxième bouton */}

            <Button 
              btnColor={countTwo.btnColor} 
              increment={countTwo.increment}
              handleClick = {incrementCountTwo}
            > 

              Count 2

            </Button>
            <Count 
              count={countTwo.value} 
              bgColor={countTwo.btnColor}
              text="countTwo"
            />
          </div>
        </div>

      </div>
  )
}

export default App
