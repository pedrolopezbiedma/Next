import Link from "next/link";
import Styles from "./EventLink.module.css";

interface EventLinkProps {
	href?: string;
	onClick?: () => void;
	children: React.ReactNode;
}

const EventLink = ({ href, onClick, children }: EventLinkProps) => {
	if (href) {
		return (
			<Link href={href} className={Styles.btn}>
				{children}
			</Link>
		);
	}
	return (
		<button className={Styles.btn} onClick={onClick}>
			{children}
		</button>
	);
};

export default EventLink;
