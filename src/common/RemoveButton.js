import React from 'react';

const RemoveButton = (props) => {
    const {removeFromCart, cartItem} = props;
    return (
        <button onClick={() => {removeFromCart(cartItem) }}>
        Remove From Cart
        </button>
    )
}

export default RemoveButton;