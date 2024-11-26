import Link from "next/link";
import Styles from "./EventLink.module.css";

interface EventLinkProps {
	href?: string;
	children: React.ReactNode;
}

const EventLink = ({ href, children }: EventLinkProps) => {
	if (href) {
		return (
			<Link href={href} className={Styles.btn}>
				{children}
			</Link>
		);
	}
	return <button className={Styles.btn}>{children}</button>;
};

export default EventLink;
