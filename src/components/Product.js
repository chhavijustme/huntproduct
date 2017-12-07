import React, {Component} from 'react';
import avatar1 from '/Users/Chhavi/WebstormProjects/huntproduct/src/images/avatars/daniel.jpg'
import product1 from '/Users/Chhavi/WebstormProjects/huntproduct/src/images/products/image-aqua.png'

class Product extends Component {
    render() {
        return (

            <div className='container'>
                <div className="row">
                    <div className='col-md-12'>

                        <div>
                            <img className='productImage'
                                 src={this.props.productImageUrl}/>
                        </div>

                        <div className="productName">
                            <p>{this.props.productName}</p>
                        </div>

                        <div className='productDescription'>
                            <p>{this.props.productDescription}</p>
                        </div>

                        <div className='productMaker'>
                    <span>Submitted by:
                        <img className='makerAvatar' src={this.props.makerAvatarUrl}/>
                    </span>

                        </div>

                    </div>


                </div>


            </div>


        );
    }
}

export default Product;