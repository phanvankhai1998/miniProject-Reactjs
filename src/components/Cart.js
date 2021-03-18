import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const { products } = props;
    return (
        <div className="cart">
            {
                products.map((item, index) => {
                    return (
                        <CartItem
                            product={item}
                            key={item.id}
                            onIncreasQuantity={props.onIncreasQuantity}
                            onDecreasQuantity={props.onDecreasQuantity}
                            onDeleteQuantity={props.onDeleteQuantity}
                        />
                    )
                })
            }
        </div>
    );
}

export default Cart;