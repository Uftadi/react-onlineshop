import React from "react";
import { useContext } from "react";
import { CartContext } from "../conetxt/CardContext";
import cartImage from "../assets/shopping-cart_4307371.png";
import "../css/cardButton.scss";

function CartButton() {
	const { cart } = useContext(CartContext);
	return (
		<>
			<div className="cart-image">
				<img src={cartImage} alt="einkaufswagen" />
				<p>{cart.length}</p>
			</div>
		</>
	);
}

export default CartButton;
