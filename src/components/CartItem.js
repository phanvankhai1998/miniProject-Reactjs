import React from 'react';

const styles = {
    image: {
        height: 110,
        width: 110,
        bordeRadius: 4,
        background: '#ccc'
    }
}


class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Vinfast Phone',
            qty: 1,
            img: ' '
        };
        this.testing();
    }

    testing() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('done');
            }, 5000);
        });

        promise.then(() => {
            //setState acts like a synchronous call    
            this.setState({
                qty: this.state.qty + 10
            });
            console.log('This is state:', this.state);
        });
    }

    increaseQuantity = () => {
        //console.log("This state:", this.state);
        //console.log("This is this:", this);
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            };
        });

    }

    decreaseQuantity = () => {
        const { qty } = this.state;
        if (qty === 0) {
            return;
        }

        //console.log("This is this:", this)
        //setState form 2 - if prevState required use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            };
        })
    }

    render() {
        const { price, title, qty } = this.state;
        console.log("This is state:", this.state);
        console.log("This is props:", this.props);

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt="#" src="https://www.flaticon.com/svg/vstatic/svg/1721/1721929.svg?token=exp=1615974575~hmac=440b022a30a6e0ba969bad07f260f627" /><br />

                </div>

                <div
                    className="right-block">
                    {/* <div style={{ fontSize: 25 }}>Name: {this.state.title}</div> */}
                    <div style={{ fontSize: 25 }}>Name: {title}</div>
                    <div style={{ color: '#777' }}>Price: {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/1721/1721899.svg?token=exp=1615974540~hmac=a493e2ea831d3275e7caabaa581302ac" onClick={this.increaseQuantity} />
                        <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/1721/1721905.svg?token=exp=1615974575~hmac=3ac49f562d0d28154c64d5415f718b12" onClick={this.decreaseQuantity} />
                        <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/1721/1721898.svg?token=exp=1615974520~hmac=1b162442f667c87d7f62033347501446" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;