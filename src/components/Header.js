import React, { Component } from 'react';
import Cart from './Cart';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isTop: 'no'
    };
  }
  componentDidMount () {
    document.addEventListener('scroll', () => this.handleSticky());
  }
  componentWillUnmount () {
    document.removeEventListener('scroll', () => this.handleSticky());
  }
  handleSticky () {
    window.scrollY > 51 ? this.setState({ isTop: 'sticky' }) : this.setState({ isTop: 'no' });
  }

  render() {
    return (
      <nav className={this.state.isTop + " navbar navbar-default"}>
         <div className="container-fluid">
          <div className="">
            <a className="navbar-brand" href="/">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> <strong>Cart.ly</strong> <u>Shop</u>
            </a>
            <div className="navbar-brand pull-right">
              <Cart/>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;