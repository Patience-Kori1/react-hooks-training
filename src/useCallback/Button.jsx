import React from 'react'

function Button({btnColor, increment, children, handleClick}) {

    console.log(`Button ${children}`)
  return (

    <button 
        className={`btn btn-${btnColor}`}
        onClick={()=> handleClick(increment)}
    > 
        + {increment} % 
    </button>

  )
}

export default React.memo(Button)