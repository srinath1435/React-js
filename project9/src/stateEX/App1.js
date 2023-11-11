import React, { Component } from 'react'

export class App extends Component {

  state ={
      msg :"Hello"

      }

  update_msgGM = ()=>{
    this.setState({msg:"Hello GM"})
  }
  update_msgGA = ()=>{
    this.setState({msg:"Hello GA it's lunch time"})
  }
  update_msgGN = ()=>{
    this.setState({msg:"Let's go to bed it's time sleeping"})
  }

  Rest_all = ()=>{

    this.setState({msg:"Hello"})
  }



  render() {
    return (
        <>
          <pre>{JSON.stringify(this.state.msg)}</pre>
          <h1> message :{this.state.msg}</h1>
          <button onClick={this.update_msgGM}>GM</button>
          <button onClick={this.update_msgGA}>GA</button>
          <button onClick={this.update_msgGN}>GN</button>
          <button onClick={this.Rest_all}>Rest</button>
          
        </>

    )
  }
}

export default App