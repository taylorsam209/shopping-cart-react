import React from 'react';
import {connect} from 'react-redux';
import {addToCart, removeFromCart, removeAllFromCart} from '../../ducks/CartReducer';

function sortByProductId(products) {
    return products.sort((a,b) => a.id < b.id)
}

function Cart(props) {
    return props.cart.length ?
    <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {sortByProductId(props.cart).map(item => {
                return (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>

                    <td>
                        <button onClick={(e) => props.addToCart(item)}>+</button>
                        <button onClick={(e) => props.removeFromCart(item)}>-</button>
                    </td>
                    <td>
                        <button onClick={(e) => props.removeAllFromCart(item)}>Remove all from cart</button>
                    </td>
                    </tr>
                )
            })}
        </tbody>
    </table> : null

}

function mapStateToProps(state){
    return {
        cart: state.cartReducer.cart
    }
}
export default connect(mapStateToProps, {addToCart, removeFromCart, removeAllFromCart})(Cart);