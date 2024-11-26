import EventList from "@/components/EventList/EventList";
import EventSearch from "@/components/EventSearch/EventSearch";
import { getAllEvents } from "../../dummy-data";

const EventsPage = () => {
	const allEvents = getAllEvents();

	return (
		<div>
			<EventSearch />
			<EventList events={allEvents} />
		</div>
	);
};

export default EventsPage;
