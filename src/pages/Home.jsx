import React, { useContext } from "react";
import { CartContext } from "../conetxt/CardContext";
import { products } from "../data/data";
import { Link } from "react-router-dom";
// css
import app from "../css/App.module.css";

function Home() {
	const { cart, addToCart } = useContext(CartContext);
	return (
		<div className={app}>
			<div className={app.productList}>
				{products.map((product) => (
					<div key={product.id} className={app.product}>
						<Link to={"/product/" + product.id}>
							<img src={product.image} alt={product.name} />
						</Link>
						<h2>{product.name}</h2>
						<p>Preis: {product.price}</p>
						<button onClick={() => addToCart(product)}>In den Warenkorb</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
