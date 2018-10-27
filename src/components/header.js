import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
      	<nav className="navbar navbar-inverse">
      		<div className="container-fluid">
      			<a className="navbar-brand" >Product</a>
      			<ul className="nav navbar-nav">
      				<li className="active">
      					<a>Home</a>
      				</li>
      				<li>
      					<a>List Products</a>
      				</li> 	
      			</ul>
      		</div>
      	</nav>
      </div>
    );
  }
}

export default Header;
