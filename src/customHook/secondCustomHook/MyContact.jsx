import React, { useEffect } from 'react'
import Search from './Search'
import {useState} from 'react'
import useUpdateDocTitle from '../firstCustomHook/CustomHook';
import TableUsers from './TableUsers';

function MyContact() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  const filterUsers = () => {

    const foundUsers = users.filter(user => {

      return Object.values(user)
      .join('')
      .toLowerCase()
      .includes(search.toLowerCase())
      // console.log(Object.values(user))
    })

    setResultSearch(foundUsers)
  }

  useEffect(() => {
    if (search !== '') {
      filterUsers();
    } else {
      setResultSearch([])
    }
  }, [search]
  )

  const handleChange = e => {
    setSearch(e.target.value)
  }

  // console.log(users)

  const msgDisplay = (msg, color) => {

    return(
      <p style={{textAlign: 'center', color: color}}>
          {msg}
      </p>
    )
   
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          setUsers(json);
          setIsLoading(false);
        })
        .catch(error => console.log(error.message))

  }, []

  )

  useUpdateDocTitle(search);

  return (
    <div>
      {
        isLoading ? msgDisplay("Veuillez patienter!", "red") : (
          <Search 
          searchStr = {search} 
          searchHandler= {handleChange}
        />
        )
      }

      {
        resultSearch.length === 0 && search !== '' ? msgDisplay('Pas de résultat','red') 
        : 

        search === '' ? msgDisplay('Veuillez effectuer une recherche', 'green')
        // search === '' ? null 
        :

         <TableUsers

        dataArray={resultSearch}
      
      />
       
      }

     
    </div>
  )
}

export default MyContact