import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../conetxt/CardContext";
import { products } from "../data/data";
// css
import singleProduct from "../css/singleProduct.module.scss";

function SingleProduct() {
	const { addToCart } = useContext(CartContext);
	const { id } = useParams();
	const product = products.find((product) => product.id === Number(id));

	return (
		<div className={singleProduct.product}>
			<div key={product.id} className={singleProduct.product}>
				<img src={product.image} alt={product.name} />
				<h2>{product.name}</h2>
				<p>
					<strong>Details:</strong> Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Ipsam, error.
				</p>
				<p>Preis: {product.price}</p>
				<button onClick={() => addToCart(product)}>In den Warenkorb</button>
			</div>
		</div>
	);
}

export default SingleProduct;
