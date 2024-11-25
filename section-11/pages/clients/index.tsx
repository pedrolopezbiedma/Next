import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const clients = [
	{ id: "1", name: "Client One" },
	{ id: "2", name: "Client Two" },
	{ id: "3", name: "Client Three" },
];

const ClientsPage = () => {
	const router = useRouter();
	const handleClick = () => {
		// router.push("/");
		throw new Error("An error occurred");
	};

	return (
		<div>
			<h1>Clients Page</h1>
			<ul>
				{clients.map((client) => (
					<li key={client.id}>
						<Link href={`/clients/${client.id}`}>{client.name}</Link>
					</li>
				))}
			</ul>
			<button onClick={handleClick}>Go Back</button>
		</div>
	);
};

export default ClientsPage;
