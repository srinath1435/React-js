import React, { Component } from 'react'

class CompB extends Component {
  render() {
    return (
      <div>
        {/* <pre>{JSON.stringify(this.props.usern)}</pre> */}
        <h1>{this.props.usern.name}</h1>
        <h1>{this.props.eid}</h1>
        <h1>{this.props.usern.email}</h1>
        <h4>{this.props.usern.loc}</h4>
        <h5>{this.props.usern.loc[0]}</h5>
        <h5>{this.props.usern.loc[1]}</h5>
      </div>
    )
  }
}

export default CompB