import React from "react";
import "../css/cart.scss";
function CartItems({ cartItems }) {
	return (
		<div className="cart">
			<h2>Warenkorb</h2>
			<ul>
				{cartItems.map((item, index) => (
					<li key={index}>
						{item.name} - ${item.price}
					</li>
				))}
			</ul>
		</div>
	);
}

export default CartItems;
