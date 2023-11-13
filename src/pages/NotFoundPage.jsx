import React from "react";
import notFoundPage from "../css/notfoundpage.module.css";
//photo
import notFound from "../assets/404-pages-sej-5f3ee7ff4966b-760x400.webp";

function NotFoundPage() {
	return (
		<div className={notFoundPage.notFound}>
			<h1>Page not found</h1>
			<img src={notFound} alt="notFoundImage" />
		</div>
	);
}

export default NotFoundPage;
