import React, { Component } from 'react';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    }
  }
  onClickBuy = () => {
		this.onClickBuy = this.onClickBuy.bind(this);
		alert(this.props.children +"  price: "+ this.props.price +"VND");
	};
  render() {
    return (
      <div>
      	<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      		<div className="thumbnail">
      			<img alt={this.props.name} src={this.props.image}/>
      			<div className="caption">
      				<h3>{this.props.children}</h3>
      				<p>
      					{this.props.price} VND
      				</p>
      				<p>
      					<a onClick={this.onClickBuy} className="btn btn-primary">Buy</a>
      					
      					<a className="btn btn-default">Order</a>
      				</p>

      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Products;
