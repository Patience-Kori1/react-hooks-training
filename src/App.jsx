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
import AppCustomHook from './customHook/AppCustomHook'
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
        <nav className="nav"> 

          <Link className="link" to="/">Use Callback </Link>  
          <Link className="link" to="/Profile">Profile</Link>
          <Link className="link" to="/useContext">Use Context </Link>  
          <Link className="link" to="/useEffect">Use Effect </Link> 
          <Link className="link" to="/useReduce">Use Reduce </Link> 
          <Link className="link" to="/useState">Use State </Link>
          <Link className="link" to="/hookFtclass">Hook ft Class </Link>
          <Link className="link"to="/customHook">Hook personalisé</Link>

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
          <Route path="/customHook" element={<AppCustomHook/>}/>
          
        </Routes>
      </Router>

    </div>
  )
}

export default App
