import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <div className="thumbnail">
                        <img alt="iphone" src="https://salt.tikicdn.com/cache/280x280/ts/product/86/dd/0c/116f1383ebab5e5af8e71301a80d1b17.jpg" />
                        <div className="caption">
                            <h3>Iphone</h3>
                            <p>
                                7.000.000
                        </p>
                            <p>
                                <a href="#" className="btn btn-primary">Action</a>
                                <a href="#" className="btn btn-default">Action</a>
                            </p>
                        </div>
                    </div>
                    <button type="button" className="btn btn-default">Mua hàng</button>
                </div>
            </div>
        );
    }
}

export default Product;



