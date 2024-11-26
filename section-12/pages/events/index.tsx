import EventList from "@/components/EventList/EventList";
import { getAllEvents } from "../../dummy-data";

const EventsPage = () => {
	const allEvents = getAllEvents();

	return (
		<div>
			<EventList events={allEvents} />
		</div>
	);
};

export default EventsPage;
