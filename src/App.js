import React, { Component } from 'react'
import './App.css';

import CustomHeading from './Components/CustomHeading';

class App extends Component {
  constructor(){
    super()
    this.state = {
      title: "Hello Kodersssss!"
    }
    this.changeHandler = this.changeHandler.bind( this )
  }

  changeHandler( event ){
    const text = event.target.value
    console.log(text)
    this.setState({ title: text})
  }

  render(){
    return(
      <React.Fragment>
        <input type="text" onChange={this.changeHandler}/>
        <CustomHeading
          text = { this.state.title ? this.state.title : "Hola Koders!" }
        />
      </React.Fragment>
    )
  }
}

export default App;