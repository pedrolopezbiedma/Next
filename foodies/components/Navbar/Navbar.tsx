import Link from "next/link";
import Image from "next/image";
import Background from "./Background/Background";

import logo from "@/assets/logo.png";
import Styles from "./Navbar.module.css";
import NavbarLink from "./Link/Link";

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
							<NavbarLink href="/meals">Meals</NavbarLink>
						</li>
						<li>
							<NavbarLink href="/community">Community</NavbarLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
