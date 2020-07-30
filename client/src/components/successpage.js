import React, { Component } from "react";
import MapViewer from "./MapViewer";

export default class successpage extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <div>
        <MapViewer />
        <h1>
          Thanks for placing the Order!! Your order number is &nbsp;
          {this.props.user.orders[this.props.user.orders.length - 1]}!!
        </h1>
        <h2>The order will be delivered in approximately bla bla time !</h2>
      </div>
    );
  }
}
