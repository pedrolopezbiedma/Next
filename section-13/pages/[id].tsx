import React from "react";
import fs from "node:fs";
import path from "node:path";
import type { GetStaticPropsContext } from "next";

interface DetailPageProps {
	product: { id: string; title: string; description: string };
}

const DetailPage = ({ product }: DetailPageProps) => {
	return (
		<>
			<p>Detail Page</p>
			<span>{product.title}</span>
			<span>{product.description}</span>
		</>
	);
};

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { id: "p1" } },
			{ params: { id: "p2" } },
			{ params: { id: "p3" } },
		],
		fallback: false,
	};
}
export async function getStaticProps(context: GetStaticPropsContext) {
	const filePath = path.join(process.cwd(), "/data/dummy-backend.json");
	const jsonData = fs.readFileSync(filePath, "utf-8");
	const response = JSON.parse(jsonData);
	console.log("🚀 ~ getStaticProps ~ response:", response);
	const product = response.products.find(
		(product) => product.id === context.params?.id,
	);
	return {
		props: {
			product,
		},
	};
}

export default DetailPage;
