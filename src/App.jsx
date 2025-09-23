import React, { Component } from 'react'
// import {UserContext, ColorContext} from "./useContext/classUseContext/MyContext"
// import Profile from './useContext/classUseContext/Profile'
import {UserContext, ColorContext} from "./useContext/hookUserContext/MyContext"
import Profile from './useContext/hookUserContext/Profile'
import './App.css'

export class App extends Component {

  state = {
    user : {
      name: " Lisa ",
      age : 8
    }
  }

  render() {
    return (
      < div className="App">

        <h2>useContext</h2>

        <UserContext.Provider value= {this.state.user}>

          <ColorContext.Provider value= {'red'}>

            <Profile/>

          </ColorContext.Provider>

        </UserContext.Provider>

    </div>
    )
  }
}

export default App

