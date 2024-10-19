"use client";

const MealsErrorPage = ({ error }) => {
	return (
		<main className="error">
			<h1>An error ocurred</h1>
			<p>Error while fetching the meals</p>
		</main>
	);
};

export default MealsErrorPage;
