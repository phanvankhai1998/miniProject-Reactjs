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
            ],

        };
        // this.testing();
    }

    render() {
        //const arr = [1, 2, 3, 4, 5, 6];
        // console.log("This is state:", this.state);
        // console.log("This is props:", this.props);
        const { products } = this.state;
        return (
            <div className="cart">
                {/* <CartItem />
                <CartItem />
                <CartItem /> */}
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