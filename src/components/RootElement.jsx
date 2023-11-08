import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import "../css/navigation.css";

function RootElement() {
	const items = [
		{ name: "Home", to: "/", id: 1 },
		{ name: "Über uns", to: "/about", id: 2 },
		{ name: "Kontakt", to: "/contact-us", id: 3 },
	];
	return (
		<>
			<header>
				<h1>DS-Shop</h1>
				<nav className="container">
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
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default RootElement;
