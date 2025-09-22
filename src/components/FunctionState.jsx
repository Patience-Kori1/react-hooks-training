import React, {useState} from 'react'

const FunctionState = () => {
    const [counter, setCounter] = useState(0)

    console.log(counter)

    // première méthode à l'ancienne pour modifier le state sans prevState
    // const addOne = () => {
    //     setCounter(counter +1 )
    // }

    // Deuxième méthode  moderne en utilisant le prevState
    const addOne = () => {
        setCounter(prevCounter => prevCounter +1 )
    }

  return (
    <div>
        <h2>2. Avec fonctions et le hook useState</h2>

        <p> Function State : <span className="counter"> {counter}</span></p>
        <div>
            
            <button onClick= {addOne}> Add  1 avec méthode en haut du return</button>

            <button onClick= {() => setCounter(prevCounter => prevCounter +1 )}> Add  1 avec arrowFunction en paramètre </button>
        </div>

    
    </div>
  )
}

export default FunctionState