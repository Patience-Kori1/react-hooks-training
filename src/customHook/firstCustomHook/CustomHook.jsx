import {useState, useEffect} from 'react'

function useUpdateDocTitle(arg) {
    
    useEffect(

        ()=> {
          // console.dir(document);
          document.title = `Titre : ${arg}`
        },

        [arg]
    );

  return (
    <div>CustomHook</div>
  )
}

export default useUpdateDocTitle