import React from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';

class ProductListing extends React.Component {

    render() {
        console.log('cart from reducer', this.props.cart)
        return(

        <div className='product-listing'>
            {this.props.products.map((product, index) =>
                <ProductItem 
                key={index} 
                product={product} 
                cartItem={this.props.cart.filter(cartItem => cartItem.id === product.id)[0]}
                />
            )}
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer.cart
    }
}

export default connect(mapStateToProps)(ProductListing);