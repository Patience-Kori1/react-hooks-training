import React from 'react'
import Search from './Search'
import {useState} from 'react'
import useUpdateDocTitle from '../firstCustomHook/CustomHook';

function MyContact() {

  const [search, setSearch] = useState('');
  useUpdateDocTitle(search);
  const handleChange = e => {
    setSearch(e.target.value)
  }

  console.log(search)

  return (
    <div>
        <Search 
          searchStr = {search} 
          searchHandler= {handleChange}
        />
    </div>
  )
}

export default MyContact

