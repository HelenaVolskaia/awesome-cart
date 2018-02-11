import React, { Component } from 'react';

class Item extends Component {
	render() {
		let item = this.props.item;
		let index = this.props.index;
		return (
				<div key={index} className="col-sm-4 col-md-3">
					<div className="item-box">
						<img src={`/images/${item.filename}`} alt=""/> <br/>
						<p>{item.name}</p>
						<div className="price"> <i className="fa fa-usd" aria-hidden="true"></i>{item.price/100}</div>
						 <button className="button"
							onClick={() => this.props.addToCart(item)}>
							Add To Cart
						</button>
					</div>
				</div>
		);
	}
}
export default Item;