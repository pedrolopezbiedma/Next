import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/EventList/EventList";

const FilteredEventsPage = () => {
	const router = useRouter();
	const slug = router.query.slug;
	const year = slug ? slug[0] : null;
	const month = slug ? slug[1] : null;

	if (!year && !month) {
		return <p>Invalid filter, please refine your search.</p>;
	}

	const filteredEvents = getFilteredEvents({
		year: +year,
		month: +month,
	});
	console.log("🚀 ~ FilteredEventsPage ~ filteredEvents:", filteredEvents);

	return <div>{filteredEvents && <EventList events={filteredEvents} />}</div>;
};

export default FilteredEventsPage;
