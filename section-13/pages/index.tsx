import React from "react";
import fs from "node:fs";
import path from "node:path";

interface HomePageProps {
	products: { id: string; title: string; description: string }[];
}

const HomePage = ({ products }: HomePageProps) => {
	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>{product.title}</li>
			))}
		</ul>
	);
};

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), "/data/dummy-backend.json");
	const jsonData = fs.readFileSync(filePath, "utf-8");
	const response = JSON.parse(jsonData);

	return {
		props: {
			products: response.products,
		},
	};
}

export default HomePage;
