import React, {Component} from 'react';


class Product extends Component {

    handleUpVote = () => (
        this.props.onVote(this.props.id)
)

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

                        <div className="vote">
                            <p>    <a onClick={this.handleUpVote}><i class="fa fa-heart" aria-hidden="true"></i></a>   {this.props.votes}</p>

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