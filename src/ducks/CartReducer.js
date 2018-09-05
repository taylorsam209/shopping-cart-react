const initialState = {
    cart: []
};

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function addToCart(product) {
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
            return Object.assign({}, state, {cart: [...state.cart, action.payload]});
        case 'REMOVE_FROM_CART':
            const firstMatchIndex = state.indexOf(action.payload)
            return state.filter((item, index) => index !== firstMatchIndex)
        default:
            return state;
    }
}

export default reducer;