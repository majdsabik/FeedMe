import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { signup } from '../services/auth';
import SearchLocationInput from './SearchLocationInput';

export default class Signup extends Component {
  constructor() {
    super();
    this.address = 'This is address';
    this.place_id = 'This is place_id';
  }
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    placeId: '',
    message: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  setAddress = (address, placeId) => {
    console.log('Got here!');
    //this.setState({ address, placeId });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { firstName, lastName, email, password, address, placeId } = this.state;

    signup(firstName, lastName, email, password, address, placeId).then(data => {
      if (data.message) {
        this.setState({
          message: data.message,
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          address: '',
          placeId: '',
        });
      } else {
        this.props.setUser(data);
      }
    });
  };

  greet = name => {
    return <h1>Hello {name}</h1>;
  };

  render() {
    return (
      <>
        <h2>Signup</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor='firstName'>First name: </Form.Label>
            <Form.Control type='text' id='firstName' name='firstName' value={this.state.firstName} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='lastName'>Last Name: </Form.Label>
            <Form.Control type='text' id='lastName' name='lastName' value={this.state.lastName} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='email'>E-Mail: </Form.Label>
            <Form.Control type='text' id='email' name='email' value={this.state.email} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='password'>Password: </Form.Label>
            <Form.Control type='password' id='password' name='password' value={this.state.password} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <SearchLocationInput address={this.address} place_id={this.place_id} onChange={() => null} value={this.state.address} />
          </Form.Group>
          {this.state.message && <Alert variant='danger'>{this.state.message}</Alert>}
          <Button type='submit'>Signup</Button>
        </Form>
      </>
    );
  }
}
