import Link from "next/link";
import Styles from "./EventLink.module.css";

interface EventLinkProps {
	href: string;
	children: React.ReactNode;
}

const EventLink = ({ href, children }: EventLinkProps) => {
	return (
		<Link href={href} className={Styles.btn}>
			{children}
		</Link>
	);
};

export default EventLink;
