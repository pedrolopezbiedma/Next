"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Styles from "./Link.module.css";

interface NavbarLinkProps {
	href: string;
	children: string;
}

const NavbarLink = (props: NavbarLinkProps) => {
	const path = usePathname();

	return (
		<Link
			className={path === props.href ? Styles.active : undefined}
			href={props.href}
		>
			{props.children}
		</Link>
	);
};

export default NavbarLink;
