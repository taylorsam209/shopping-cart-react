import React, {Component} from 'react';
import {connect} from 'react-redux';


// function that  takes in the products and filter 
export const cartItemsWithQuantity = (cartItems) => {
    // if(cartItems.length) {

        return cartItems.reduce((accumulator, item) => {
            const filteredItem = accumulator.filter(item2 => item2.id === item.id)[0]
            filteredItem !== undefined ? filteredItem.quantity++ 
            : accumulator.push({...item, quantity: 1})
            return accumulator
        },[])
    // }
}
