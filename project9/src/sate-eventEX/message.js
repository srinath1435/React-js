import React, { Component } from 'react'

class message extends Component {
    state={
        qty:1
    }

    incrHandler = ()=>{
        this.setState({qty:this.state.qty + 1})
    }

    decrHandler = ()=>{
        this.setState({qty:this.state.qty - 1})
    }

  render() {
    return (
      <>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card mt-5">
                    <div className="card-header">
                        <h4>qty:{this.state.qty}</h4>
                    </div>
                    <div className="card-body">
                        <button className='btn btn-success mr-4' onClick={this.incrHandler}>INCR</button>
                        <button className='btn btn-warning' onClick={this.decrHandler}>DECR</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      </>
    )
  }
}

export default message