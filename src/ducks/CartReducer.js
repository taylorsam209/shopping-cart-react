const initialState = {
    cart: []
};

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART';

export function addToCart(product) {
    console.log('product', product)
    return {
        type: ADD_TO_CART,
        payload: product
    }
}



export function removeFromCart(product) {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}

export function removeAllFromCart(product) {
    return {
        type: REMOVE_ALL_FROM_CART,
        payload: product
    }
}

const reducer = (state = initialState, action) => {
    //cart helper function
    const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]
            const addToCart = (cart, item) => {
            const cartItem = itemInCart(cart, item);
            return cartItem === undefined ? Object.assign({}, state, {cart:[...cartWithoutItem(cart, item), { ...item, quantity: 1 }] })
                : Object.assign({}, state, {cart: [...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }] })    
            }
            return addToCart(state.cart, action.payload)
        case 'REMOVE_FROM_CART':
            const removeFromCart = (cart, item) => {
            return item.quantity === 1 ?
            Object.assign({}, state, {cart: [...cartWithoutItem(cart, item)]}) 
            : Object.assign({}, state, {cart: [...cartWithoutItem(cart, item), {...item, quantity: item.quantity - 1}]})
        }
        return removeFromCart(state.cart, action.payload);
        case 'REMOVE_ALL_FROM_CART':
            return Object.assign({}, state, {cart: [...cartWithoutItem(state.cart, action.payload)]})
        default:
            return state;
    }
}

export default reducer;