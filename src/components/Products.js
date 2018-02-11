import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Item from './Item'

class Products extends Component {

	render() {
		const productList = this.props.products.map( (item,index)  => {
			return  <Item key={index} item={item} index={index} addToCart={this.props.addToCart}></Item>
		});

		return (
			<div className= "products row">
				 { productList }
			</div>
		);
	}
}

function mapStateToProps(state, props) {
		return {
				products: state.products
		};
}

function mapDispatchToProps(dispatch) {
		return {
				addToCart: item => dispatch(addToCart(item))
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

