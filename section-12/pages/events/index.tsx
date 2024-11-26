import EventList from "@/components/EventList/EventList";
import EventSearch from "@/components/EventSearch/EventSearch";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

const EventsPage = () => {
	const allEvents = getAllEvents();
	const router = useRouter();

	const handleSearch = (year: string, month: string) => {
		router.push(`/events/${year}/${month}`);
	};

	return (
		<div>
			<EventSearch handleSearch={handleSearch} />
			<EventList events={allEvents} />
		</div>
	);
};

export default EventsPage;
