

import React from "react";
import "../css/cart.scss";

function CartItems({ cartItems }) {
    
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

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
            <p>Total Preice: ${totalPrice.toFixed(2)}</p>
        </div>
    );
}

export default CartItems;

