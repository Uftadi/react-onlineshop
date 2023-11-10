import React, { useState, useContext } from "react";
import "../css/App.css";
import one from "../assets/img-1.jpg";
import two from "../assets/img-2.jpg";
import three from "../assets/img-3.jpg";
import four from "../assets/img-4.jpg";
import five from "../assets/img-5.jpg";
import six from "../assets/img-6.jpg";
import { CartContext } from "../conetxt/CardContext";
import { products } from "../data/data";

function Home() {
	const { cart, addToCart } = useContext(CartContext);

	return (
		<div className="App">
			<h1>Online Shopping</h1>
			<div className="product-list">
				{products.map((product) => (
					<div key={product.id} className="product">
						<img src={product.image} alt={product.name} />
						<h2>{product.name}</h2>
						<p>Preis: {product.price}</p>
						<button onClick={() => addToCart(product)}>In den Warenkorb</button>
					</div>
				))}
			</div>
			{/* <Cart cartItems={cart} />{" "} */}
		</div>
	);
}

export default Home;
