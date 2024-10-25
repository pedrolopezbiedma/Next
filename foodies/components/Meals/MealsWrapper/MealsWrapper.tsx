import MealsGrid from "@/components/Meals/MealsGrid/MealsGrid";

import { getMeals } from "@/backend/db/meals";
import type { Meal } from "@/types/meal";

const MealsWrapper = async () => {
	const meals: Meal[] = await getMeals();

	return <MealsGrid meals={meals} />;
};

export default MealsWrapper;
