import type { Event } from "../../types";
import EventRecord from "./EventRecord";
import Styles from "./EventList.module.css";

interface EventListProps {
	events: Event[];
}

const EventList = ({ events }: EventListProps) => {
	return (
		<ul className={Styles.list}>
			{events.map((event: Event) => (
				<EventRecord event={event} />
			))}
		</ul>
	);
};

export default EventList;
