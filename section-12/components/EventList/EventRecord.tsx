import type { Event } from "../../types";
import Styles from "./EventRecord.module.css";
import EventLink from "./EventLink";
import AddressIcon from "../Icons/address-icon";
import DateIcon from "../Icons/date-icon";
import ArrowRightIcon from "../Icons/arrow-right-icon";

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
						<DateIcon />
						<time>{eventDate}</time>
					</div>
					<div className={Styles.address}>
						<AddressIcon />
						<address>{eventAddress}</address>
					</div>
				</div>
				<div className={Styles.actions}>
					<EventLink href={`/events/${event.id}`}>
						<span className={Styles.icon}>
							Explore Event
							<ArrowRightIcon />
						</span>
					</EventLink>
				</div>
			</div>
		</li>
	);
};

export default EventRecord;
