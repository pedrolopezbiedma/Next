import Link from "next/link";
import Image from "next/image";
import Background from "./Background/Background";

import logo from "@/assets/logo.png";
import Styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<>
			<Background />
			<header className={Styles.header}>
				<Link className={Styles.logo} href="/">
					<Image src={logo} alt="Foodies logo" />
					NextLevel food
				</Link>
				<nav className={Styles.nav}>
					<ul>
						<li>
							<Link href="/meals">Browse Meals</Link>
						</li>
						<li>
							<Link href="/community">Community</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
