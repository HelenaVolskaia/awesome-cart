import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import Modal from 'react-modal';

class Cart extends Component {
	constructor() {
		super();
		this.state = {
			modalIsOpen: false
		};
		Modal.setAppElement('body');
	}
	openModal() {
		this.setState({modalIsOpen: true});
	}
	closeModal() {
		this.setState({modalIsOpen: false});
	}
	render() {
		let total = 0;
		const cartList = this.props.cart.map(( item, index ) => {
				total = total + item.price;
				return (
					<div key={index} className="item-in-cart">
						<img src={`/images/${item.filename}`} alt="item" className="pull-left "/>
						<div style={{ color: "#767676"}}>
							{item.name}
							<i className="fa fa-times-circle" aria-hidden="true" onClick={ () => this.props.removeFromCart(item)}></i>
							<br/> <i className="fa fa-usd" aria-hidden="true"></i>
							{item.price}
						</div><br/>
					</div>
				)
		});
		return (
			<div>
				<div  className="cart-count" onClick={()=> this.openModal()}>Your Cart {this.props.cart.length}</div>
				<Modal  isOpen={this.state.modalIsOpen}l>
					<h1> Your Cart </h1>
					<div  className="cart row">
						{this.props.cart.length > 0 ? cartList : <h3>Nothing in your cart, start shopping</h3>}
					</div>
						<div className="total">
							<h2><span className="pull-left"> Total:</span> <i className="fa fa-usd" aria-hidden="true"></i>  {total}</h2>
						</div>
						<div className="row" onClick={()=> this.closeModal()}>
							<div className="btn btn-back">
								Back
							</div>
						</div>
				</Modal>
			</div>

		);
	}
}

function mapStateToProps(state, props) {
	return {
		cart: state.cart
	};
}

function mapDispatchToProps(dispatch) {
	return {
		removeFromCart: item => dispatch(removeFromCart(item))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
