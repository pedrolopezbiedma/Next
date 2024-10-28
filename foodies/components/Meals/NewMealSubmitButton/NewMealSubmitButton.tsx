"use client";

import { useFormStatus } from "react-dom";

import Styles from "./NewMealSubmitButton.module.css";

const NewMealSubmitButton = () => {
	const status = useFormStatus();

	return (
		<p className={Styles.actions}>
			<button type="submit" disabled={status.pending}>
				{status.pending ? "Submitting" : "Share Meal"}
			</button>
		</p>
	);
};

export default NewMealSubmitButton;
