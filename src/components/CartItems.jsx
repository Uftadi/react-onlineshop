

/*import React from "react";
import { useContext } from "react";
import { CartContext } from "../conetxt/CardContext";
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
            <p>Total Price: {totalPrice.toFixed(2)} Euro</p>
			
                   
        </div>
    );
}

export default CartItems;*/

import React, { useState } from "react";
import "../css/cart.scss";


function CartItems({ cartItems }) {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    const [paymentOption, setPaymentOption] = useState("paypal");

    const handlePaymentOptionChange = (event) => {
        setPaymentOption(event.target.value);
    };
    const handleSubmit = (e) => { e.preventDefault()
        alert(`Payment option: ${paymentOption}`);

        };


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
            <p>Total Price: {totalPrice.toFixed(2)} Euro</p>

            <div className="payment-options">
                <p>Choose Payment Option:</p>
                <label>
                    <input
                        type="radio"
                        value="paypal"
                        checked={paymentOption === "paypal"}
                        onChange={handlePaymentOptionChange}
                    />
                    PayPal
                </label>
                <label>
                    <input
                        type="radio"
                        value="klarna"
                        checked={paymentOption === "klarna"}
                        onChange={handlePaymentOptionChange}
                    />
                    Klarna
                </label>
                <label>
                    <input
                        type="radio"
                        value="andere"
                        checked={paymentOption === "andere"}
                        onChange={handlePaymentOptionChange}
                    />
                    Andere
                </label>
            </div>
            <button className="button" onClick={handleSubmit}>Zur Kasse</button>
        </div>
    );
}

export default CartItems;
