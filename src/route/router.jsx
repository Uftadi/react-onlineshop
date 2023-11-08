import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Productpage from "../pages/Productpage";
import SingleProduct from "../pages/SingleProduct";
import NotFoundPage from "../pages/NotFoundPage";
import RootElement from "../components/RootElement";
import Contact from "../pages/Contact";

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
				path: "/products",
				element: <Productpage />,
			},
			{
				path: "/products/:id",
				element: <SingleProduct />,
			},
			{
				path: "/contuct-us",
				element: <Contact />,
			},
			{
				path: "/*",
				element: <NotFoundPage />,
			},
		],
	},
]);

export default router;
