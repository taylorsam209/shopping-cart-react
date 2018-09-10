const initialState = {
    cart: []
};

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)
            const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]
            const addToCart = (cart, item) => {
            const cartItem = itemInCart(cart, item);
                return cartItem === undefined ? Object.assign({}, state, {cart:[...cartWithoutItem(cart, item), { ...item, quantity: 1 }] })
                   : Object.assign({}, state, {cart: [...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }] })    
            }
            return addToCart(state.cart, action.payload)
            // return Object.assign({}, state, { cart: [...state.cart, action.payload] });
        case 'REMOVE_FROM_CART':
            const firstMatchIndex = state.indexOf(action.payload)
            return state.filter((item, index) => index !== firstMatchIndex)
        default:
            return state;
    }
}

export default reducer;