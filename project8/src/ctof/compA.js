import React, { Component } from 'react'
import CompB from './compB'

class CompA extends Component {
    user=[
        {name:"Rahul",
    email:"Rahul@gmail.com",
    loc:['wayanad','bangalore']
        },
        {
        name:"Srianath",
        email:"Srina@gmail.com",
        loc:['wayanad','bangalore','Kurnool']
        }
    ]
    

  render() {
    return (
      <div>
      <CompB emp={this.user}/>
      </div>
    )
  }
}

export default CompA