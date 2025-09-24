import React from 'react'

function Button({btnColor, increment, children, handleClick}) {
  return (

    <button 
        className={`btn btn-${btnColor}`}
        onClick={()=> handleClick(increment)}
    > 
        + {increment} % 
    </button>

  )
}

export default Button