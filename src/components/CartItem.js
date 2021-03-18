import React from 'react';

const styles = {
    image: {
        height: 110,
        width: 110,
        bordeRadius: 4,
        background: '#ccc'
    }
}

const CartItem = (props) => {
    const { price, title, qty } = props.product;
    // console.log("This is state:", this.state);
    // console.log("This is props:", this.props);

    const { product, onIncreasQuantity, onDecreasQuantity, onDeleteQuantity } = props;

    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} alt="#" src={product.img} /><br />
            </div>

            <div
                className="right-block">
                {/* <div style={{ fontSize: 25 }}>Name: {this.state.title}</div> */}
                <div style={{ fontSize: 25 }}>Name: {title}</div>
                <div style={{ color: '#777' }}>Price: {price}</div>
                <div style={{ color: '#777' }}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/vstatic/svg/1721/1721899.svg?token=exp=1615974540~hmac=a493e2ea831d3275e7caabaa581302ac"
                        onClick={() => onIncreasQuantity(product)}

                    // onClick={this.increaseQuantity}
                    />
                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/vstatic/svg/1721/1721905.svg?token=exp=1615974575~hmac=3ac49f562d0d28154c64d5415f718b12"
                        onClick={() => onDecreasQuantity(product)}
                    // onClick={this.decreaseQuantity}
                    />
                    <img
                        alt="delete"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/vstatic/svg/1721/1721898.svg?token=exp=1615974520~hmac=1b162442f667c87d7f62033347501446"
                        onClick={() => onDeleteQuantity(product.id)}
                    />
                </div>
            </div>
        </div>
    );
}
// increaseQuantity = () => {
//     //console.log("This state:", this.state);
//     //console.log("This is this:", this);
//     this.setState((prevState) => {
//         return {
//             qty: prevState.qty + 1
//         };
//     });

// }

// decreaseQuantity = () => {
//     const { qty } = this.state;
//     if (qty === 0) {
//         return;
//     }

//     //console.log("This is this:", this)
//     //setState form 2 - if prevState required use this
//     this.setState((prevState) => {
//         return {
//             qty: prevState.qty - 1
//         };
//     })
// }

export default CartItem;