import React from 'react';
import './App.css';
import { googleLogin as Google } from './services/auth';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route } from 'react-router-dom';
import OrdersView from './components/OrdersView';

export default class App extends React.Component {
  state = {
    user: this.props.user,
    message: 'Just a test message',
  };

  setUser = user => {
    this.setState({
      user: user,
    });
  };

  render = () => {
    return (
      <div className='App'>
        <OrdersView />
        <Route exact path='/signup' render={props => <Signup setUser={this.setUser} {...props} />} />
        <Route exact path='/login' render={props => <Login setUser={this.setUser} {...props} />} />
      </div>
    );
  };
}
