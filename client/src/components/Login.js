import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { login } from '../services/auth';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    message: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    login(email, password).then(data => {
      if (data.message) {
        this.setState({
          message: data.message,
          email: '',
          password: '',
        });
      } else {
        this.props.setUser(data);
        this.props.history.push('/');
      }
    });
  };

  render() {
    return (
      <>
        <h2>Login</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor='email'>E-Mail: </Form.Label>
            <Form.Control type='text' name='email' value={this.state.email} onChange={this.handleChange} id='email' />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='password'>Password: </Form.Label>
            <Form.Control type='password' name='password' value={this.state.password} onChange={this.handleChange} id='password' />
          </Form.Group>
          {this.state.message && <Alert variant='danger'>{this.state.message}</Alert>}
          <Button type='submit'>Login</Button>
        </Form>
      </>
    );
  }
}
