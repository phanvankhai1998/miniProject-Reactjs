import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            // <div>
            //     <h1>Header</h1>
            // </div>
            <nav className="navbar navbar-inverse">
                <a className="navbar-brand">UNIT 2: Component</a>
                <ul className="nav navbar-nav">
                    <li>
                        <a>Home</a>
                    </li>
                    <li className="active">
                        <a>Menu</a>
                    </li>
                </ul>
            </nav>

        );
    }
}

export default Header;
