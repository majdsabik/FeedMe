import React from 'react';
import { getSubOrders, advanceState } from '../services/repository';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

export default class OrdersView extends React.Component {
  state = {
    orders: [],
    user: this.props.user,
    restaurantPrefix: 'RIC',
  };

  componentDidMount() {
    getSubOrders(this.state.restaurantPrefix).then(orders => {
      this.setState({ orders });
    });
  }

  handleSubmit = (event, order) => {
    console.log(order);
    switch (order.status) {
      case 'placed':
        advanceState(order._id, 'inPreparation');
        break;
      case 'inPreparation':
        advanceState(order._id, 'outForDelivery');
        break;
      case 'outForDelivery':
        advanceState(order._id, 'Delivered');
        break;
    }
    //event.preventDefault();
  };

  render() {
    const { orders } = this.state;
    return (
      <div className=' container'>
        {orders.map(order => (
          <Form key={uuid()} onSubmit={event => this.handleSubmit(event, order)}>
            <Form.Group>
              <h4>{order.subOrderId}</h4>
              <h4>{order.status}</h4>
              <h4>{order.items}</h4>
              <h4>{order.subTotal}</h4>
              <h4>{order.createdAt}</h4>
            </Form.Group>
            <Button type='submit'>Advance state</Button>
          </Form>
        ))}
      </div>
    );
  }
}
