import Link from "next/link";
import MealsGrid from "@/components/Meals/MealsGrid/MealsGrid";

import Styles from "./page.module.css";

const MealsPage = () => {
	return (
		<>
			<header className={Styles.header}>
				<h2>
					Delicious Meals created
					<span className={Styles.highlight}>by you</span>
				</h2>
				<p>
					Choose your favorite recipe and cook it yourself. It is easy and fun!
				</p>
				<p className={Styles.cta}>
					<Link href="/share">Share your favorite recipe</Link>
				</p>
			</header>
			<main>
				<MealsGrid
					meals={[
						{
							title: "test",
							slug: "1",
							image: "",
							summary: "summary",
							creator: "pepe",
						},
					]}
				/>
			</main>
		</>
	);
};

export default MealsPage;
