import React from 'react'
// import MyContact from './MyContact'

function Search({searchStr, searchHandler}) {
  return (
    <div>
        
        <input 
            type="text" 
            placeholder='chercher...'
            value = {searchStr}
            onChange = {searchHandler}
        />

    </div>
  )
}

export default Search