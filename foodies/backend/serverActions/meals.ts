"use server";

import type { Meal } from "@/types/meal";
import { createMeal } from "../db/meals";
import { redirect } from "next/navigation";

const validateMeal = (meal: Meal) => {
	if (
		!meal.creator ||
		meal.creator.trim() === "" ||
		!meal.creator_email ||
		meal.creator_email.trim() === "" ||
		meal.creator_email.indexOf("@") === -1 ||
		!meal.title ||
		meal.title.trim() ||
		!meal.summary ||
		meal.summary.trim() ||
		!meal.instructions ||
		meal.instructions.trim() ||
		!meal.image ||
		meal.image.size === 0
	) {
		throw new Error("Invalid meal data");
	}
};

export const submitForm = async (formData) => {
	const meal: Meal = {
		creator: formData.get("name"),
		creator_email: formData.get("email"),
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
	};

	validateMeal(meal);

	await createMeal(meal);
	redirect("/meals");
};
