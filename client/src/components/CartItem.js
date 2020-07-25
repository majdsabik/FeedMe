import React from 'react';

export default class CartItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	render(){
		const { menu } = this.props;
		return (
		    <div className="card" style={{ marginBottom: "10px"}}>
			  <div className="card-body">
			    <h4 className="card-title">{menu.name}</h4>
			    <h5 className="card-text"><small>price: </small>${menu.price}</h5>
			    <span className="card-text text-success"><small>Quantity: </small>{menu.qty}</span> 
			    <button className="btn btn-sm btn-warning float-right" onClick={() => this.props.remove(product)}>Remove from cart</button>
			  </div>
			</div>
		)
	}
}
