import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
	const [cart, setCart] = useState([]);

	function addToCart(item) {
		const updatedCart = [...cart, item];
		setCart(updatedCart);
	}

	return (
		<CartContext.Provider value={{ cart, addToCart }}>
			{children}
		</CartContext.Provider>
	);
}
