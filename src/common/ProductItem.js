import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../ducks/CartReducer';

const ProductItem = (props) => {
    const {cart, product, addToCart, removeFromCart } = props;
    console.log('listitem', cart)
    // const itemInCart = cart.filter(item => item.id === product.id)[0]
    // console.log('item in cart', itemInCart)
    return (
        <div className='product-item'>
            <h3>{product.name}</h3>
            <div className='image-placeholder'>Image Placeholder</div>
            {/* <img
            height={100}
            title={product.name}
            src={`products/${product.image}`}
            
            /> */}
            <div>{product.description}</div>
            <div>${product.price}</div>
            <div>
                <button onClick={() => { addToCart(product) }}>Add to Cart({
                    (cart && cart.quantity) || 0
                })</button>
            </div>
        </div>
    )
}

export default connect(null, { addToCart, removeFromCart })(ProductItem);