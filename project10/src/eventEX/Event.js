import React, { Component } from 'react'

class Event extends Component {
     state={
        msg:"Hello"
    }

    // gmHandler =()=>{

    //     this.setState({msg:"GM"})
    // }

    // gaHandler =()=>{
    //     this.setState({msg:"GA"})
    // }

    // geHandler =()=>{
    //     this.setState({msg:"GE"})
    // }

    // gnHandler =()=>{
    //     this.setState({msg:"GN"})

    
    update_Handler = (value)=>{
        this.setState({msg:value})
    }
    

  render() {
    return (
      <>
      <pre>{JSON.stringify(this.state.msg)}</pre>
      <h1>msg:{this.state.msg}</h1>
      {/* <button onClick={this.gmHandler}> GM </button>
      <button onClick={this.gaHandler}> GA </button>
      <button onClick={this.geHandler}> GE </button>
      <button onClick={this.gnHandler}> GN </button> */}
      <button onClick={this.update_Handler.bind(this,"GM")}>GM</button>
      <button onClick={this.update_Handler.bind(this,"GA")}>GA</button>
      <button onClick={this.update_Handler.bind(this,"GE")}>GE</button>
      <button onClick={this.update_Handler.bind(this,"GN")}>GN</button>


    
      </>
    )
  }
}

export default Event