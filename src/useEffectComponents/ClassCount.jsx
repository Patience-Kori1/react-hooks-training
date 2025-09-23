import React, { Component } from 'react'

export class ClassCount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        console.log('Je suis dans CDM')
        document.title = `Vous avez cliqué ${this.state.count} fois`
    }

    componentDidUpdate(prevProps, prevState) {

      if(this.state.count !== prevState.count) {
          console.log("Mise à jour du titre")
          document.title = `Vous avez cliqué ${this.state.count} fois`
      }
        
    }

  render() {
    return (
      <div className ="ClassCount">
        <h1>{this.state.count}</h1>

        <div>

          <input 
            type="text" 
            value = {this.state.name} 
            onChange = { e => {this.setState({
            name: e.target.value
            })}}
          />

          <button onClick={()=> this.setState({count : this.state.count +1})}> Boutton</button>
          
        </div>

      </div>
    )
  }
}

export default ClassCount
