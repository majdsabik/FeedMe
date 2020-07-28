<<<<<<< HEAD
import React from "react";
import "./App.css";
import { googleLogin as Google } from "./services/auth";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Redirect } from "react-router-dom";
import EmployeeLogin from "./components/employeeLogin";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import OrdersView from "./components/OrdersView";
import Checkout from "./components/Checkout";
=======
import React from 'react';
import './App.css';
import { googleLogin as Google } from './services/auth';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Redirect } from 'react-router-dom';
import EmployeeLogin from './components/employeeLogin';
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrdersView from './components/OrdersView';
>>>>>>> ba489b3c780d3053e2d16c3268c57c72561600dc

export default class App extends React.Component {
  state = {
    user: this.props.user,
<<<<<<< HEAD
    message: "Just a test message",
=======
    message: '',
>>>>>>> ba489b3c780d3053e2d16c3268c57c72561600dc
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render = () => {
    return (
<<<<<<< HEAD
      <div className="App">
        <Route
          exact
          path="/signup"
          render={(props) => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/employee/login"
          render={(props) => (
            <EmployeeLogin setUser={this.setUser} {...props} />
          )}
        />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
=======
      <div className='App'>
        <Route exact path='/' render={props => <OrdersView setUser={this.setUser} user={this.state.user} {...props} />} />
        <Route exact path='/signup' render={props => <Signup setUser={this.setUser} {...props} />} />
        <Route exact path='/login' render={props => <Login setUser={this.setUser} {...props} />} />
        <Route exact path='/employee/login' render={props => <EmployeeLogin setUser={this.setUser} {...props} />} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/cart' component={Cart} />
>>>>>>> ba489b3c780d3053e2d16c3268c57c72561600dc
      </div>
    );
  };
}
