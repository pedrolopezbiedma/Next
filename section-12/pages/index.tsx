import EventList from "@/components/EventList/EventList";
import { getFeaturedEvents } from "../dummy-data";
import React from "react";

const HomePage = () => {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<EventList events={featuredEvents} />
		</div>
	);
};

export default HomePage;
