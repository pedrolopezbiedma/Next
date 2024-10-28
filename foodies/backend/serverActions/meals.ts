"use server";

import type { Meal } from "@/types/meal";
import { createMeal } from "../db/meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const validateMeal = (meal: Meal) => {
	if (
		!meal.creator ||
		meal.creator.trim() === "" ||
		!meal.creator_email ||
		meal.creator_email.trim() === "" ||
		meal.creator_email.indexOf("@") === -1 ||
		!meal.title ||
		meal.title.trim() === "" ||
		!meal.summary ||
		meal.summary.trim() === "" ||
		!meal.instructions ||
		meal.instructions.trim() === "" ||
		!meal.image ||
		meal.image.size === 0
	) {
		return true;
	}
};

export const submitForm = async (prevState, formData) => {
	const meal: Meal = {
		creator: formData.get("name"),
		creator_email: formData.get("email"),
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
	};

	if (validateMeal(meal)) return { message: "Invalid meal data" };

	await createMeal(meal);

	revalidatePath("/meals", "page");
	redirect("/meals");
};
