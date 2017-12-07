import React, {Component} from 'react';
import Product from './Product'
import '../seed.js';

class ProductList extends Component{
    render(){

        const products = window.Seed.products.sort((a,b) => (b.votes-a.votes));

        const productComponents = window.Seed.products.map((product) => (
            <Product
            id ={product.id}
            productName = {product.productName}
            productDescription = {product.productDescription}
            votes={product.votes}
            makerAvatarUrl={product.makerAvatarUrl}
            productImageUrl={product.productImageUrl}/>

        ));
    }
}

export default ProductList;
