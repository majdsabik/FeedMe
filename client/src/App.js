import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { googleLogin as Google } from './services/auth';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Redirect } from 'react-router-dom';
import EmployeeLogin from './components/employeeLogin';
import Menu from './components/Menu';
import Cart from './components/Cart'

export default class App extends React.Component {
  state = {
    user: this.props.user,
  };
  setUser = user => {
    this.setState({
      user: user,
    });
  };
  render = () => {
    return (
      <div className='App'>
        <Route
          exact
          path='/signup'
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path='/login'
          render={props => <Login setUser={this.setUser} {...props} />}
        />
          <Route
          exact
          path='/employee/login'
          render={props => <EmployeeLogin setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path='/menu'
          component={Menu}
        />
          <Route
          exact
          path='/cart'
          component={Cart}
        />
        

      </div>
    );
  };
}
