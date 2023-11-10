import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import SingleProduct from "../pages/SingleProduct";
import RootElement from "../components/RootElement";
import Contact from "../pages/Contact";
import NotFoundPage from "../pages/NotFoundPage";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
	{
		element: <RootElement />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/:id",
				element: <SingleProduct />,
			},
			{
				path: "/contact-us",
				element: <Contact />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/*",
				element: <NotFoundPage />,
			},
		],
	},
]);

export default router;
