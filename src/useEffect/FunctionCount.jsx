import React from 'react'
import { useState, useEffect } from 'react'

function FunctionCount() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {

      console.log("Mise à jour via useEffect")
      document.title = `Vous avez cliqué ${count} fois`
       
    }, [name] )

    // Dans le useEffect, ce qui se trouve entre accolade, c'est à dire en premier paramètre de la fonction useEffect c'est le QUOI. C'est à dire ce qui va s'exécuter et ce qui se trouve après la virgule c'est le QUAND. Si on met count dans le deuxième table, il changera quand count sera mise à jour et non quand name sera mis à jour. Si on met les deux, il s'actualisera quand les deux seront mise à jour et si on met rien, ça ne le sera qu'au chargement

  return (
    <div className ="FunctionCount">
        <h1>{count}</h1>

        <div>
          <input 
            type="text" 
            value = {name} 
            onChange = { e => setName(e.target.value)}
          />
          <button onClick={()=> setCount(count +1)}> Cliquer</button>
        </div>

    </div>
  )
}

export default FunctionCount