import React from 'react'
import CompB from './compB'

function CompA() {
  let ename = "Srianth"
  let salary = 850000
  let location = "Bangaloor"

    return (
    <div>
        <CompB emp={ename} esal={salary} eloc={location} />
    </div>
  )
}


export default CompA