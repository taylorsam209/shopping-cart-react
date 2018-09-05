import React, {Component} from 'react';
import ProductListing from '../common/ProductListing';
import data from '../products.json';

export default function HomePage(props) {
    console.log(data);
    return(
        <div>
            <h2>HomePage</h2>
            <ProductListing products={data.products}/>
        </div>
    )
}