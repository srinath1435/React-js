import React from 'react'

function CompB(props) {
  return (
    <div>
        <h3>{JSON.stringify(props)}</h3>
        <h1>{props.emp}</h1>
        <h1>{props.eloc}</h1>
        <h1>{props.esal}</h1>
    </div>
  )
}

export default CompB