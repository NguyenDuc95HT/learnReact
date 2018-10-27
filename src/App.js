import React, { Component } from 'react';
import Header from './components/header';
import Products from './components/products';
import PostProduct from './components/postProduct';
class App extends Component {

  render() {
  	let products = [
  		{
  			name: 'iphone XS Max',
  			price: 30000000,
  			image: 'https://rent2business.com/wp-content/uploads/2018/02/iphone-x_2.jpg'
  		},
  		{
  			name: 'iphone XS',
  			price: 25000000,
  			image: 'https://rent2business.com/wp-content/uploads/2018/02/iphone-x_2.jpg'
  		},
  		{
  			name: 'iphone X',
  			price: 20000000,
  			image: 'https://rent2business.com/wp-content/uploads/2018/02/iphone-x_2.jpg'
  		},
  		{
  			name: 'iphone 8 plus',
  			price: 15000000,
  			image: 'https://rent2business.com/wp-content/uploads/2018/02/iphone-x_2.jpg'
  		}
  	];
  	let listProducts = products.map((products, item)=> {
  		return <Products
  						key = {products.name}
  						price = {products.price}
  						image = {products.image}
  					>
  						{ products.name }
      			</Products>
  			
  	});
    return (
      <div>
      	<Header/>
      	<div className ="container">
      		<div className="row">
      			<div className="row">
      				<div class="row">
      					<PostProduct/>
      					<button type="button" className="btn btn-default" onClick={this.addProduct} >Add product</button>
      				</div>    				
      				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      					{listProducts}
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default App;
