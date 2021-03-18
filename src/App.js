import React, { Component } from 'react';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

class App extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    price: 1000,
                    title: 'Oppo Phone',
                    qty: 1,
                    img: 'https://www.flaticon.com/svg/vstatic/svg/1721/1721963.svg?token=exp=1616028004~hmac=8400b04785757b2b75bc58749b259d29'
                },
                {
                    id: 2,
                    price: 2000,
                    title: 'Vinfast Phone',
                    qty: 2,
                    img: 'https://www.flaticon.com/svg/vstatic/svg/1721/1721912.svg?token=exp=1616028005~hmac=dc3acbb39cd8550cf4af87b4dc0fc9fc'
                },
                {
                    id: 3,
                    price: 3000,
                    title: 'Bi Phone',
                    qty: 3,
                    img: 'https://www.flaticon.com/svg/vstatic/svg/1721/1721908.svg?token=exp=1616028009~hmac=e0825712e14e0e956810cedf2fae71cf'
                }
            ]
        }
    }

    handleInCreaseQuantity = (product) => {
        console.log('Heyy please inc the qty of', product);
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        this.setState({
            products

        });
    }

    handleDecreasQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);

        if (products[index].qty === 0) {
            return;
        }

        products[index].qty -= 1;
        this.setState({
            products

        });
    }

    handleDeleteProduct = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id !== id);    //[{}]
        this.setState({
            products: items
        });
    }

    getCartCount = () => {
        const { products } = this.state;

        let count = 0;

        products.forEach((product) => {
            count += product.qty;
        })

        return count;
    }

    getCartTotal = () => {
        const { products } = this.state;

        let cartTotal = 0;

        products.map((product) => {
            cartTotal = cartTotal + product.qty * product.price
        })

        return cartTotal;
    }

    render() {
        const { products } = this.state;
        return (
            <div className="App" >
                {/* <header className="App-header">
                    <h1>AppComponent</h1>
                    <h2>Hello world!</h2>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header> */}
                {/* <div>
                    <div>
                        <Header>
                            <h3>
                                Header
                            </h3>
                        </Header>

                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <Product>
                                    <div>

                                    </div>
                                </Product>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <Product>
                                    <div>

                                    </div>
                                </Product>
                            </div>
                        </div>
                    </div>
                </div> */}
                <h1>Cart</h1>
                <Navbar
                    count={this.getCartCount()}
                />
                <Cart
                    products={products}
                    onIncreasQuantity={this.handleInCreaseQuantity}
                    onDecreasQuantity={this.handleDecreasQuantity}
                    onDeleteQuantity={this.handleDeleteProduct}
                />
                <div style={{ padding: 10, fontSize: 20 }}>Total:{this.getCartTotal()}</div>
            </div>
        );
    }
}


export default App;
