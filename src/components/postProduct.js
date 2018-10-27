import React, { Component } from 'react';
import App from '../App';

class postProduct extends Component {

  onAddProduct = () => {
    //alert(typeof(this.refs.name.value));
    let newProduct = {
      name: this.refs.name.value,
      price: parseInt(this.refs.price.value),
      image: this.refs.image.value,
    }
  };
  render() {
    return (
    
      	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h3 className="panel-title">Add Product</h3>
              </div>
              <div className="panel-body">
                  <div className="form-group">
                    <label>Product name</label>
                    <input ref="name" type="text" className="form-control"/>
                    <label>Product price</label>
                    <input ref="price" type="number" className="form-control"/>
                    <label>Product link image</label>
                    <input ref="image" type="text" className="form-control"/>
                  </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>
                      Submit
                    </button>
                    <br/>
                  </div>
            </div>
        </div>
      
    );
  }
}

export default postProduct;
