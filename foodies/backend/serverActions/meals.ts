"use server";

import type { Meal } from "@/types/meal";
import { createMeal } from "../db/meals";
import { redirect } from "next/navigation";

export const submitForm = async (formData) => {
	const meal: Meal = {
		creator: formData.get("name"),
		creator_email: formData.get("email"),
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
	};

	await createMeal(meal);
	redirect("/meals");
};
