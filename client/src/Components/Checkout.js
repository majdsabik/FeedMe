import React from 'react';
import { isAuthenticated, getCartData ,PlaceOrder } from '../services/repository';
import {  Redirect, Link } from 'react-router-dom';

export default class Checkout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: [],
			total: 0
		}
	}

	componentWillMount() {
		let cart = localStorage.getItem('cart');
		if (!cart) return; 
		getCartData(cart).then((menu) => {
			let total = 0;
			for (var i = 0; i < menu.length; i++) {
				total += menu[i].price * menu[i].qty;
			}
	    	this.setState({ menu, total });
	    });
	}

	render() {
		if (!isAuthenticated()) return (<Redirect to="/login" />);
		const { menu, total } =  this.state;
		return (
			<div className=" container">
				<h3 className="card-title">Checkout</h3>
				<hr/>
				{
					menu.map((menuItem, index) => 
						<div key={index}>
							<p>
								{menuItem.name} 
								<small> (quantity: {menuItem.qty})</small>
								<span className="float-right text-primary">${menuItem.qty * menuItem.price}</span>
							</p><hr/>
						</div>
					)
				}
				<hr/>
				{ menu.length ? <div><h4><small>Total Amount:</small><span className="float-right text-primary">${total}</span></h4><hr/></div>: ''}
				{ !menu.length ? <h3 className="text-warning">No item on the cart</h3>: ''}
				{ menu.length ? <button className="btn btn-success float-right" onClick={PlaceOrder(cart)}>Confirm</button>: '' }
				<Link to="/"><button className="btn btn-danger float-right" style={{ marginRight: "10px" }}>Cancel</button></Link>
				<br/><br/><br/>
			</div>
		);
	}
}
