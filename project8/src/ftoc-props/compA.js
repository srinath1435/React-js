import React from 'react'
import CompB from './compB'
function CompA() {
    let user ={
        name:"Srinath",
        email:"Rahul@gmail.com",
        loc:['wayanad','bangalore']
    }

  return (
    <div>
        <CompB usern={user} eid={101}/>
    </div>
  )
}

export default CompA