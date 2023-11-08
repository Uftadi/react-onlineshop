import React from "react";
import { RouterProvider } from "react-router-dom";
import Navigation from "./components/RootElement";
import router from "./route/router";

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
