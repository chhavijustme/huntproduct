import React, {Component} from 'react';
import Product from './Product'
import '../seed.js';

class ProductList extends Component{
  state={
      products: [],
  };

    componentDidMount(){
        this.setState({products: window.Seed.products});
    }


    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1,
                });
            }
            else {
                return product;
            }

        });

        this.setState({
            products: nextProducts,
        });
    }

    render(){

        const products = this.state.products.sort((a,b) => (b.votes-a.votes));



        const productComponents = products.map((product) => (

            <Product
                key={'product-' + product.id}
                id ={product.id}
                productName = {product.productName}
                productDescription = {product.productDescription}
                votes={product.votes}
                makerAvatarUrl={product.makerAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpVote}
            />));

        return(
            <div className="ui-stack">
                {productComponents}
            </div>
        );


    }
}

export default ProductList;
