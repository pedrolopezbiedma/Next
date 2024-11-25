import Link from "next/link";
import type { Event } from "../types";

interface EventRecordProps {
	event: Event;
}

const EventRecord = ({ event }: EventRecordProps) => {
	const eventDate = new Date(event.date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	const eventAddress = event.location.replace(", ", "\n");

	return (
		<li key={event.id}>
			<img src={event.image} alt="event details" />
			<div>
				<div>
					<h2>{event.title}</h2>
					<div>
						<time>{eventDate}</time>
					</div>
					<div>
						<address>{eventAddress}</address>
					</div>
				</div>
				<div>
					<Link href={`/events/${event.id}`}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
};

export default EventRecord;
