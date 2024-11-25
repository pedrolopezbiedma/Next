import React from "react";
import { useRouter } from "next/router";

const PortfolioDetailsPage = () => {
	const router = useRouter();
	console.log("🚀 ~ PortfolioDetailsPage ~ router:", router);
	return (
		<div>
			<h1>Home Page</h1>
		</div>
	);
};

export default PortfolioDetailsPage;
