import Link from "next/link";
import { Suspense } from "react";

import MealsWrapper from "@/components/Meals/MealsWrapper/MealsWrapper";
import FallbackLoading from "@/components/Loading/FallbackLoading/FallbackLoading";

import Styles from "./page.module.css";

const MealsPage = () => {
	return (
		<>
			<header className={Styles.header}>
				<h2>
					Delicious Meals created
					<span className={Styles.highlight}> by you</span>
				</h2>
				<p>
					Choose your favorite recipe and cook it yourself. It is easy and fun!
				</p>
				<p className={Styles.cta}>
					<Link href="/share">Share your favorite recipe</Link>
				</p>
			</header>
			<main>
				<Suspense
					fallback={<FallbackLoading>Loading meals...</FallbackLoading>}
				>
					<MealsWrapper />
				</Suspense>
			</main>
		</>
	);
};

export default MealsPage;
