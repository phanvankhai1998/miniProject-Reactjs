import React, { Component } from 'react';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import firebase from 'firebase';

class App extends Component {
    constructor() {
        super();
        console.log("This is constructor");
        this.state = {
            products: [
                // {
                //     id: 1,
                //     price: 1000,
                //     title: 'Oppo Phone',
                //     qty: 1,
                //     img: 'https://www.flaticon.com/svg/vstatic/svg/1721/1721963.svg?token=exp=1616028004~hmac=8400b04785757b2b75bc58749b259d29'
                // },
                // {
                //     id: 2,
                //     price: 2000,
                //     title: 'Vinfast Phone',
                //     qty: 2,
                //     img: 'https://www.flaticon.com/svg/vstatic/svg/1721/1721912.svg?token=exp=1616028005~hmac=dc3acbb39cd8550cf4af87b4dc0fc9fc'
                // },
                // {
                //     id: 3,
                //     price: 3000,
                //     title: 'Bi Phone',
                //     qty: 3,
                //     img: 'https://www.flaticon.com/svg/vstatic/svg/1721/1721908.svg?token=exp=1616028009~hmac=e0825712e14e0e956810cedf2fae71cf'
                // }
            ],
            loading: true
        }

        this.db = firebase.firestore();
    }

    componentDidMount() {
        // firebase
        //     .firestore()
        //     .collection('products')
        //     .get()
        //     .then((snapshot) => {
        //         console.log(snapshot);

        //         snapshot.docs.map((doc) => {
        //             console.log(doc.data());
        //         });

        //         const products = snapshot.docs.map((doc) => {
        //             const data = doc.data();

        //             data['id'] = doc.id
        //             return data;
        //         });

        //         this.setState({
        //             products,
        //             loading: false
        //         });
        //     })

        // firebase
        //     .firestore()
        this.db
            .collection('products')
            .onSnapshot((snapshot) => {
                console.log(snapshot);

                snapshot.docs.map((doc) => {
                    console.log(doc.data());
                });

                const products = snapshot.docs.map((doc) => {
                    const data = doc.data();

                    data['id'] = doc.id
                    return data;
                });

                this.setState({
                    products,
                    loading: false
                });
            })
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
            if (product.qty > 0) {
                cartTotal = cartTotal + product.qty * product.price;
            }
            return '';
        });
        return cartTotal;
    }

    addProduct = () => {
        this.db
            .collection('products')
            .add({
                img: '',
                price: 900,
                qty: 3,
                title: 'Washing Machine'
            })
            .then((docRef) => {
                console.log('Product has been added:', docRef);
            })
            .catch((error) => {
                console.log('Error:', error);
            })
    }

    render() {
        console.log("Rendering...")
        console.log("This is state:", this.state);
        console.log("This is props:", this.props);
        const { products, loading } = this.state;
        return (
            <div className="App" >
                <h1>Cart</h1>
                <Navbar count={this.getCartCount()} />
                <button
                    onClick={this.addProduct}
                    style={{ padding: 20, fontSize: 20 }}
                >Add a product
                </button>
                <Cart
                    products={products}
                    onIncreasQuantity={this.handleInCreaseQuantity}
                    onDecreasQuantity={this.handleDecreasQuantity}
                    onDeleteQuantity={this.handleDeleteProduct}
                />
                { loading && <h1>Loading Products...</h1>}
                <div style={{ padding: 10, fontSize: 20 }}>Total:{this.getCartTotal()}</div>
            </div>
        );
    }
}


export default App;
