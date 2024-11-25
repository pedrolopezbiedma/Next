import Link from "next/link";
import React from "react";

const ClientsPage = () => {
	const clients = [
		{ id: "1", name: "Client One" },
		{ id: "2", name: "Client Two" },
		{ id: "3", name: "Client Three" },
	];
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
		</div>
	);
};

export default ClientsPage;
