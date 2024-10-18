import Link from "next/link";

import Styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<header className={Styles.header}>
				<div className={Styles.slideshow}></div>
				<div>
					<div className={Styles.hero}>
						<h1>NextLevel foor for NextLevel foodies</h1>
						<p>Taste and share food from all over the world</p>
					</div>
					<div className={Styles.cta}>
						<Link href="/">Join the community</Link>
						<Link href="/meals">Explore meals</Link>
					</div>
				</div>
			</header>
			<main>
				<section className={Styles.section}>
					<h2>How it works</h2>
					<p>
						NextLevel Food is a platform for foodies to share their favorite
						recipes with the world. It&apos;s a place to discover new dishes,
						and to connect with other food lovers.
					</p>
					<p>
						NextLevel Food is a place to discover new dishes, and to connect
						with other food lovers.
					</p>
				</section>

				<section className={Styles.section}>
					<h2>Why NextLevel Food?</h2>
					<p>
						NextLevel Food is a platform for foodies to share their favorite
						recipes with the world. It&apos;s a place to discover new dishes,
						and to connect with other food lovers.
					</p>
					<p>
						NextLevel Food is a place to discover new dishes, and to connect
						with other food lovers.
					</p>
				</section>
			</main>
		</>
	);
}
