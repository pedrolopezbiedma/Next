import ImagePicker from "@/components/ImagePicker/ImagePicker";
import { submitForm } from "@/backend/serverActions/meals";
import Styles from "./page.module.css";

const SharePage = () => {
	return (
		<>
			<header className={Styles.header}>
				<h1>
					Share your <span className={Styles.highlight}>favorite meal</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</header>
			<main className={Styles.main}>
				<form className={Styles.form} action={submitForm}>
					<div className={Styles.row}>
						<p>
							<label htmlFor="name">Your name</label>
							<input type="text" id="name" name="name" required />
						</p>
						<p>
							<label htmlFor="email">Your email</label>
							<input type="email" id="email" name="email" required />
						</p>
					</div>
					<p>
						<label htmlFor="title">Title</label>
						<input type="text" id="title" name="title" required />
					</p>
					<p>
						<label htmlFor="summary">Short Summary</label>
						<input type="text" id="summary" name="summary" required />
					</p>
					<p>
						<label htmlFor="instructions">Instructions</label>
						<textarea
							id="instructions"
							name="instructions"
							rows="10"
							required
						/>
					</p>
					<ImagePicker label="Image" name="image" />
					<p className={Styles.actions}>
						<button type="submit">Share Meal</button>
					</p>
				</form>
			</main>
		</>
	);
};

export default SharePage;
