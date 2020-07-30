import React from "react";

export default class CartItem extends React.Component {
  state = {
    quantity: 1,
  };

  render() {
    const { menuItem } = this.props;

    return (
      <div className="card" style={{ marginBottom: "10px" }}>
        <div className="card-body">
          <h4 className="card-title">{menuItem.name}</h4>
          <h5 className="card-text">
            <small>price: </small>€{menuItem.price}
          </h5>
          <span className="card-text text-success">
            <small>Quantity: </small>
            {menuItem.qty}
          </span>
          <button
            className="btn btn-sm btn-warning float-right"
            onClick={() => this.props.remove(menuItem)}
          >
            Remove from cart
          </button>
        </div>
      </div>
    );
  }
}
