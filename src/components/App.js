import React, { Component } from 'react';
import Header from './Header';
import Products from './Products';
import '../styles/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header></Header>
				<div className="container">
					<div className="App">
						<h2 className="shop">Shop our featured collection</h2>
						<Products/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;



