import React from "react";
import { Outlet, Link, NavLink, redirect } from "react-router-dom";
import cart from "../assets/shopping-cart_4307371.png";
import "../css/navigation.scss";
import CartButton from "./CartButton";

function RootElement() {
	const items = [
		{ name: "Home", to: "/", id: 1 },
		{ name: "Über uns", to: "/about", id: 2 },
		{ name: "Kontakt", to: "/contact-us", id: 3 },
	];
	return (
		<>
			<header>


				

				<nav className="container">
				<h1>DS OnlineShop </h1>
					<ul>
						{items.map((item) => {
							return (
								<li key={item.id}>
									<NavLink
										to={item.to}
										style={({ isActive }) => ({
											color: isActive ? "white" : "black",
											borderBottom: isActive ? "2px solid white" : "none",
										})}
									>
										{item.name}
									</NavLink>
								</li>
							);
						})}
					</ul>
					<div>
						<Link to="/cart">
							<CartButton />
						</Link>
					</div>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default RootElement;
