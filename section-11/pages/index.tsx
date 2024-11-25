import Link from "next/link";
import React from "react";

const HomePage = () => {
	return (
		<div>
			<h1>Home Page</h1>
			<ul>
				<li>
					<Link href={"/portfolio"}>My Portfolio</Link>
				</li>
				<li>
					<Link href={"/clients"}>My Clients</Link>
				</li>
			</ul>
		</div>
	);
};

export default HomePage;
