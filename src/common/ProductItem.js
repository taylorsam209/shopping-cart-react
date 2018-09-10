import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../ducks/CartReducer';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

const ProductItem = ({cartItem, product, addToCart, removeFromCart}) => {
    console.log('item in cart', cartItem)
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
                {/* <button onClick={() => { addToCart(product) }}>Add to Cart({
                    (cart && cart.quantity) || 0
                })</button> */}
                <AddButton 
                addToCart={addToCart}
                cartItem={cartItem}
                product={product}
                />

                {cartItem ? <RemoveButton cartItem={cartItem} removeFromCart={removeFromCart} /> : null}
            </div>
        </div>
    )
}

export default connect(null, { addToCart, removeFromCart })(ProductItem);