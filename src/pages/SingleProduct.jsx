import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/data";

function SingleProduct() {
	const { id } = useParams();
	const product = products.find((product) => product.id === Number(id));

	return (
		<div className="product-list">
			<div key={product.id} className="product">
				<img src={product.image} alt={product.name} />
				<h2>{product.name}</h2>
				<p>Preis: {product.price}</p>
				<button onClick={() => addToCart(product)}>In den Warenkorb</button>
			</div>
		</div>
	);
}

export default SingleProduct;
