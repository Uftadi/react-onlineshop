import React, { useState } from "react";
import "../css/App.css";
import Cart from "../components/Card.jsx";

import one from "../assets/img-1.jpg";
import two from "../assets/img-2.jpg";
import three from "../assets/img-3.jpg";
import four from "../assets/img-4.jpg";
import five from "../assets/img-5.jpg";
import six from "../assets/img-6.jpg";

function Home() {
	const products = [
		{ id: 1, name: "Gelbe Bluse", price: 19.99, image: one },
		{ id: 2, name: "Bunte Bluse", price: 25.99, image: two },
		{ id: 3, name: "Jean", price: 29.99, image: three },
		{ id: 4, name: "Weiße Bluse", price: 25.99, image: four },
		{ id: 5, name: "Hodie", price: 22.99, image: five },
		{ id: 6, name: "T-Shirt", price: 15.99, image: six },
	];

	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		setCart([...cart, product]);
	};

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
			<Cart cartItems={cart} />{" "}
			{/* Verwende die Cart-Komponente und übergebe den Warenkorb */}
		</div>
	);
}

export default Home;
