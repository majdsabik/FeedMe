import React from 'react';
import { getSubOrders } from '../services/repository';
import { v4 as uuid } from 'uuid';

export default class OrdersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentWillMount() {
    getSubOrders().then(orders => {
      console.log(orders);
      this.setState({ orders });
    });
  }

  render() {
    const { orders } = this.state;
    return (
      <div className=' container'>
        {orders.map(order => (
          <div key={uuid()}>
            <h4>{order.subOrderId}</h4>
            <h4>{order.status}</h4>
            <h4>{order.items}</h4>
            <h4>{order.subTotal}</h4>
            <h4>{order.createdAt}</h4>
            <br />
            <br />
          </div>
        ))}
      </div>
    );
  }
}
