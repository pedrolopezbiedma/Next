import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import EventSummary from "../../components/EventDetails/event-summary";
import EventLogistics from "../../components/EventDetails/event-logistics";
import EventContent from "../../components/EventDetails/event-content";

const EventDetailsPage = () => {
	const router = useRouter();
	const eventId = router.query.eventId;
	const event = getEventById(eventId);

	if (!event) {
		return <p>No event found</p>;
	}

	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt="Event Detail image"
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	);
};

export default EventDetailsPage;
