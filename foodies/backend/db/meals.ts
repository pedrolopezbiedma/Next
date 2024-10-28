import sql from "better-sqlite3";
import type { Meal } from "@/types/meal";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export const getMeals = async (): Promise<Meal[]> => {
	await new Promise((resolve) => setTimeout(resolve, 2000)); // Only added for demo purposes.
	return db.prepare("SELECT * FROM meals").all();
};

export const getMealById = (slug: string): Meal => {
	return db.prepare("SELECT * from meals WHERE slug = ?").get(slug);
};

export const createMeal = async (meal: Meal): Promise<void> => {
	// Sanitize instructions
	meal.instructions = xss(meal.instructions);

	// Slug
	const slug = slugify(meal.title + Math.random() * 1000, { lower: true }); // Forcing all chars to be lowercase
	meal.slug = slug;

	// Create the image filepath
	const imageExtension = meal.image.name.split(".").pop();
	const filename = `${slug}$.${imageExtension}`;

	// Save the image to the public folder
	const stream = fs.createWriteStream(`public/images/${filename}`);
	const bufferedImage = await meal.image.arrayBuffer();
	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) throw new Error("Saving image failed");
	});

	meal.image = `/images/${filename}`;

	db.prepare(
		`INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`,
	).run(meal);
};
