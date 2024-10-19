import Image from "next/image";
import { notFound } from "next/navigation";

import { getMealById } from "backend/meals";

import Styles from "./page.module.css";

const MealPage = ({ params }) => {
	const { mealId } = params;
	const meal = getMealById(mealId);

	if (!meal) {
		notFound();
	}
	meal.instructions = meal.instructions.replace(/\n/g, "<br />");
	return (
		<>
			<header className={Styles.header}>
				<div className={Styles.image}>
					<Image src={meal.image} alt="Meal image" fill />
				</div>
				<div className={Styles.headerText}>
					<h1>{meal.title}</h1>
					<p className={Styles.creator}>
						<a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={Styles.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				<p
					className={Styles.instructions}
					dangerouslySetInnerHTML={{ __html: meal.instructions }}
				/>
			</main>
		</>
	);
};

export default MealPage;
