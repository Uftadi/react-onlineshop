import React from "react";
import CartItems from "../components/CartItems";
import { useContext } from "react";
import { CartContext } from "../conetxt/CardContext";
function Cart() {
	const { cart } = useContext(CartContext);
	return (
		<>
			<CartItems cartItems={cart} />
		</>
	);
}

export default Cart;
