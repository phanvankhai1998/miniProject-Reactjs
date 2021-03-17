import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    // constructor() {
    //     super();

    // }
    render() {
        //const { price, title, qty } = this.state;
        console.log("This is state:", this.state);
        console.log("This is props:", this.props);

        return (
            <div className="cart">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        );
    }
}

export default Cart;