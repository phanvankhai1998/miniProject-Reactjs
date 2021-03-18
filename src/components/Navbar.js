import React from 'react';

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img
                    alt="#"
                    style={styles.cartIcon}
                    src="https://www.flaticon.com/svg/vstatic/svg/3594/3594363.svg?token=exp=1615993356~hmac=ffde547e84abc8196b1904abec4209c4"></img>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20,
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative',
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    },
    image: {
        height: 110,
        width: 110,
        bordeRadius: 4,
        background: '#ccc'
    }
}

export default Navbar;