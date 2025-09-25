import React from 'react'

function Count({count, bgColor, text}) {

    const progress = {width: `${count}%`}

    console.log(`pourcentage ${text}`)

  return (
    <div>
        <p className="h1"> {count}% </p>

        <div className="progress">

            <div 
                className= {`progress-bar progress-bar-striped bg-${bgColor}`} role="progressbar"
                style= {progress}
            >

            </div>
        </div>
    </div>
  )
}

export default React.memo(Count)