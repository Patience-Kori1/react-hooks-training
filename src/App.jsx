import './App.css'
import {useState, useCallback} from 'react'
import Profile from './components/Profile'
import AppUseContext from './useContext/AppUseContext'
import PrivateRoute from './components/PrivateRoute'
import AppUseCallback from './useCallback/AppUseCallback'
import AppUseEffect from './useEffect/AppUseEffect'
import AppUseReduce from './useReduce/AppUseReduce'
import AppUseState from './useState/AppUseState'
import AppHookFtClass from './hooksFtClass/AppHookFtClass'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  const[isAdmin, setAdmin] = useState(false); // ou false pour non admin

  return (
    < div className="App">
      <Router
        // Je rajoute cette ligne pour accepter le flag des futurs améliorations
        future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        }}
      >
        <nav>

          <Link to="/">Use Callback </Link> | 
          <Link to="/Profile">Profile</Link> |  
          <Link to="/useContext">Use Context </Link> |  
          <Link to="/useEffect">Use Effect </Link> | 
          <Link to="/useReduce">Use Reduce </Link> | 
          <Link to="/useState">Use State </Link> | 
          <Link to="/hookFtclass">Hook ft Class </Link> |

        </nav>
        <Routes>
          <Route path="/" element={<AppUseCallback/>}/>
          
          <Route 
            path="/Profile" 
            element={
              <PrivateRoute isAdmin={isAdmin}>
                <Profile/>
              </PrivateRoute> 
          }/>

          <Route path="/useContext" element={<AppUseContext/>}/>
          <Route path="/useEffect" element={<AppUseEffect/>}/>
          <Route path="/useReduce" element={<AppUseReduce/>}/>
          <Route path="/useState" element={<AppUseState/>}/>
          <Route path="/hookFtClass" element={<AppHookFtClass/>}/>
          
        </Routes>
      </Router>

    </div>
  )
}

export default App
