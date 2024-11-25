import Link from "next/link";
import type { Event } from "../types";
import Styles from "./EventRecord.module.css";

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
		<li key={event.id} className={Styles.item}>
			<img src={event.image} alt="event details" />
			<div className={Styles.content}>
				<div className={Styles.summary}>
					<h2>{event.title}</h2>
					<div className={Styles.date}>
						<time>{eventDate}</time>
					</div>
					<div className={Styles.address}>
						<address>{eventAddress}</address>
					</div>
				</div>
				<div className={Styles.actions}>
					<Link href={`/events/${event.id}`}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
};

export default EventRecord;
