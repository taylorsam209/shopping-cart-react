import React from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import { cartItemsWithQuantity } from '../common/Cart';

class ProductListing extends React.Component {

    componentDidUpdate(prevProps) {
        console.log('component did update', prevProps)
    }

    render() {
        return(

        <div className='product-listing'>
            {this.props.products.map((product, index) =>
                <ProductItem 
                key={index} 
                product={product} 
                cart={cartItemsWithQuantity(this.props.cart) }
                />
            )}
        </div>
        )
    }
}


// const ProductListing = (props) => {
//     console.log(props.cart)
//     return (
//     )
// }

function mapStateToProps(state) {
    return {
        cart: state.cartReducer.cart
    }
}

export default connect(mapStateToProps)(ProductListing);