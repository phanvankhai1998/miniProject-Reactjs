import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    price: 1000,
                    title: 'Oppo Phone',
                    qty: 1,
                    img: ' '
                },
                {
                    id: 2,
                    price: 2000,
                    title: 'Vinfast Phone',
                    qty: 2,
                    img: ' '
                },
                {
                    id: 3,
                    price: 3000,
                    title: 'Bi Phone',
                    qty: 3,
                    img: ' '
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

    render() {
        //const arr = [1, 2, 3, 4, 5, 6];
        // console.log("This is state:", this.state);
        // console.log("This is props:", this.props);
        const { products } = this.state;
        return (
            <div className="cart">
                {/* {
                    arr.map((item) => {
                        return item + 5;
                    })
                } */}

                {
                    products.map((item, index) => {
                        return (
                            <CartItem
                                product={item}
                                key={item.id}
                                onIncreasQuantity={this.handleInCreaseQuantity}
                                onDecreasQuantity={this.handleDecreasQuantity}
                                onDeleteQuantity={this.handleDeleteProduct}
                            // func={() => {
                            //     console.log("asdf")
                            // }}
                            // islogging={false}
                            // jsx={<h1>Test</h1>}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default Cart;