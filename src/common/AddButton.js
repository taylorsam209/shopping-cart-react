import React from 'react';

const AddButton = (props) => {
    const {addToCart, product, cartItem} = props;
    return (
        <button onClick={() => { addToCart(product) }}>
        Add to Cart({(cartItem && cartItem.quantity) || 0})
        </button>
    )
}

export default AddButton;