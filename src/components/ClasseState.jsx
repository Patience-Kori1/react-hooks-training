import React, { Component } from 'react'

export class ClasseState extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counter:0
        }
    }

    // première méthode à l'ancienne pour modifier le state sans prevState
    addOne = () => {
        this.setState ({
            counter:this.state.counter +1
        })
    }

    // Deuxième méthode  moderne en utilisant le prevState
    addOne = () => {
        this.setState ( prevState => {
            return {
                counter: prevState.counter +1
            }
        })
    }

  render() {
    return (
      <div>

        <h2> 1. Avec les classes</h2>

        <p> Class State : <span className="counter"> {this.state.counter}</span></p>

        <button onClick= {this.addOne}> Add  1 </button>
        
      </div>
    )
  }
}

export default ClasseState
