import Link from "next/link";
import Image from "next/image";

import Styles from "./MealITem.module.css";

interface MealItemProps {
	title: string;
	slug: string;
	image: string;
	summary: string;
	creator: string;
}

const MealItem = ({ title, slug, image, summary, creator }: MealItemProps) => {
	return (
		<article className={Styles.meal}>
			<header>
				<div className={Styles.image}>
					<Image src={image} alt={title} fill />
				</div>
				<div className={Styles.headerText}>
					<h2>{title}</h2>
					<p>by {creator}</p>
				</div>
			</header>
			<div className={Styles.content}>
				<p className={Styles.summary}>{summary}</p>
				<div className={Styles.actions}>
					<Link href={`/meals/${slug}`}>View Details</Link>
				</div>
			</div>
		</article>
	);
};

export default MealItem;
