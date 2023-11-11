import React, { Component } from 'react'
import CompB from './compB'

class CompA extends Component {
  ename="Srinath"
  salary=850000

  render() {
    return (
      <div>
        <CompB emp={this.ename} esal={this.salary} />

      </div>
    )
  }
}

export default CompA