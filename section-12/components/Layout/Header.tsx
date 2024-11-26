import Link from "next/link";
import Styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={Styles.header}>
			<div className={Styles.logo}>
				<Link href={"/"}>Next Events</Link>
			</div>
			<nav className={Styles.navigation}>
				<ul>
					<li>
						<Link href={"/events"}>All Events</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
