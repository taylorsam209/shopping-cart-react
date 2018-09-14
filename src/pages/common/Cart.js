import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeAllFromCart
} from "../../ducks/CartReducer";

class Cart extends Component {
  state = {
    total: 0
  };
  componentWillMount() {
    this.calculateTotal();
    this.sortByProductId();
  }

  calculateTotal() {
    if (this.props.cart.length) {
      let total = 0;
      this.props.cart.map(product => (total = total + product.price * product.quantity));
      this.setState({ total: total.toFixed(2) });
    }
  }

  //Sorts all product by ID. This should be done from the database prior possibly, adding cart button should push directly to database
  sortByProductId() {
    return this.props.cart.sort((a, b) => a.id < b.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.cart !== prevProps.cart) {
      this.calculateTotal();
      this.sortByProductId();
    }
  }

  render() {
    console.log(this.props.cart);
    return this.props.cart.length ? (
      <div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(item => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={e => this.props.addToCart(item)}>+</button>
                    <button onClick={e => this.props.removeFromCart(item)}>-</button>
                  </td>
                  <td>
                    <button onClick={e => this.props.removeAllFromCart(item)}>Remove all from cart</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h1>Total: {this.state.total}</h1>
      </div>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart
  };
}

export default connect(mapStateToProps, { addToCart, removeFromCart, removeAllFromCart })(Cart);
