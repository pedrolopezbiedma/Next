import EventList from "@/components/EventList";
import { getFeaturedEvents } from "../dummy-data";
import React from "react";

const HomePage = () => {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<h1>Home Page</h1>
			<EventList events={featuredEvents} />
		</div>
	);
};

export default HomePage;
