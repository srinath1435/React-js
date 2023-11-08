import React from 'react'
import Message from './components/message'
class App extends React.Component{
    render(){
        return <div>
            <h1>This is class component</h1>
            <hr />
            <Message />
        </div>
    }
}

export default App