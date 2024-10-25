"use server";

import type { Meal } from "@/types/meal";

export const submitForm = async (formData) => {
	const meal: Meal = {
		creator: formData.get("name"),
		creator_email: formData.get("email"),
		title: formData.get("name"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
	};

	console.log("meal", meal);
};
