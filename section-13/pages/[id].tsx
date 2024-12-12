import React from "react";
import fs from "node:fs";
import path from "node:path";
import type { GetStaticPropsContext } from "next";

interface DetailPageProps {
	product: { id: string; title: string; description: string };
}

const DetailPage = ({ product }: DetailPageProps) => {
	if (!product) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<p>Detail Page</p>
			<span>{product.title}</span>
			<span>{product.description}</span>
		</>
	);
};

export async function getStaticPaths() {
	const filePath = path.join(process.cwd(), "/data/dummy-backend.json");
	const jsonData = fs.readFileSync(filePath, "utf-8");
	const response = JSON.parse(jsonData);
	const pathsWithParams = response.products.map((product) => ({
		params: { id: product.id },
	}));
	return {
		paths: pathsWithParams,
		fallback: true,
	};
}
export async function getStaticProps(context: GetStaticPropsContext) {
	const filePath = path.join(process.cwd(), "/data/dummy-backend.json");
	const jsonData = fs.readFileSync(filePath, "utf-8");
	const response = JSON.parse(jsonData);
	const product = response.products.find(
		(product) => product.id === context.params?.id,
	);

	if (!product) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			product,
		},
	};
}

export default DetailPage;
