import React, { Component } from 'react'

class compB extends Component {
  render() {
    return (
      <div>
      <pre>{JSON.stringify(this.props)}</pre>
      <h1>{this.props.emp}</h1>
      <h2>{this.props.esal}</h2>
      </div>
    )
  }
}

export default compB