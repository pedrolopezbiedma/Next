import MealItem from "../MealItem/MealItem";

import Styles from "./MealsGrid.module.css";

interface MealsGridProps {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	meals: any[];
}

const MealsGrid = (props: MealsGridProps) => {
	const { meals } = props;
	return (
		<ul className={Styles.meals}>
			{meals.map((meal) => (
				<li key={meal.id}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	);
};

export default MealsGrid;
