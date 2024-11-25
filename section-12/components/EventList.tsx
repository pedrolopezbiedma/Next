import type { Event } from "../types";
import EventRecord from "./EventRecord";

interface EventListProps {
	events: Event[];
}

const EventList = ({ events }: EventListProps) => {
	return (
		<ul>
			{events.map((event: Event) => (
				<EventRecord event={event} />
			))}
		</ul>
	);
};

export default EventList;
