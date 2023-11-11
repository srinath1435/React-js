import React from 'react'

function CompB(props) {

  return (
    <div>
       <pre>{JSON.stringify(props.emp)}</pre>
       <h2>emp1={props.emp[0].name}</h2>
       <h2>emp2={props.emp[1].name}</h2>
       <h2>emp1-loc={props.emp[0].loc}</h2>
       <h2>emp1-loc={props.emp[0].loc[0]}</h2>
       <h2>emp1-loc={props.emp[0].loc[1]}</h2>
       <h1>emp2-loc={props.emp[1].loc}</h1>
       <h1>emp2-loc={props.emp[1].loc[0]}</h1>
       <h1>emp2-loc={props.emp[1].loc[1]}</h1>
       <h2>emp2-loc={props.emp[1].loc[2]}</h2>

    </div>
  )
}
export default CompB
