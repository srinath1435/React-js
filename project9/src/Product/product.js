import React, { Component } from 'react'

class Product extends Component {
    state={
        pname:"i phone 14",
        img:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
        price:98999,
        qty:1
    }

    incrHandler = ()=>{
        this.setState({qty:this.state.qty + 1})
    }

    decHandler =()=>{
        this.setState({qty:this.state.qty - 1})
    }


  render() {
    return (
      <>
      <div className="container">
        <div className="row">
            <div className="col-md-6    ">
                <table className='table table-hover'>
                    <thead className='table  bg-info'>
                        <tr>
                        <th>P-name</th>
                        <th>image</th>
                        <th>quantity</th>
                        <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.pname}</td>
                            <td><img src={this.state.img} height="100px" /></td>
                            <td>{this.state.qty > 0 ? <><i className='fa fa-minus-circle' onClick={this.decHandler}></i></> : null}
                                {/* <i className='fa fa-minus-circle' onClick={this.decHandler}></i> */}
                                {this.state.qty}
                                <i className='fa fa-plus-circle' onClick={this.incrHandler}></i>
                                </td>
                            <td>{this.state.qty * this.state.price}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
      </div>

      </>
    )
  }
}

export default Product