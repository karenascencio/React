import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      stage: ""
    }
    this.setStage = this.setStage.bind( this )
  }

  setStage( event ){
    const value = event.target.value
    console.log(value)
    this.setState({ stage: value})
  }

  render(){
    return(
      <React.Fragment>
        <input className="control" type="radio" name="stage" value="go" onClick={this.setStage}/>
        <label for="" >Go</label>
        <input className="control" type="radio" name="stage" value="caution" onClick={this.setStage}/>
        <label for="" >Caution</label>
        <input className="control" type="radio" name="stage" value="stop" onClick={this.setStage}/>
        <label for="" >Stop</label>
        <div className="traffic-light">
          <div className={`light ${this.state.stage}`}></div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;