import {createStore, combineReducers} from 'redux';
import CartReducer from './ducks/CartReducer';

const rootReducer = combineReducers({
    cartReducer: CartReducer
})

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;