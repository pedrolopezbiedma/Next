import sql from "better-sqlite3";
import type { Meal } from "@/types/meal";

const db = sql("meals.db");

export const getMeals = async (): Promise<Meal[]> => {
	await new Promise((resolve) => setTimeout(resolve, 2000)); // Only added for demo purposes.
	return db.prepare("SELECT * FROM meals").all();
};

export const getMealById = (slug: string): Meal => {
	return db.prepare("SELECT * from meals WHERE slug = ?").get(slug);
};
