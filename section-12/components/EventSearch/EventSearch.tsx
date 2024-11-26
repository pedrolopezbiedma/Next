import { useRef } from "react";
import EventLink from "../EventList/EventLink";
import Styles from "./EventSearch.module.css";

interface EventSearchProps {
	handleSearch: (year: string, month: string) => void;
}

const EventSearch = ({ handleSearch }: EventSearchProps) => {
	const yearRef = useRef<HTMLSelectElement>(null);
	const monthRef = useRef<HTMLSelectElement>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const selectedYear = yearRef.current?.value;
		const selectedMonth = monthRef.current?.value;
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		handleSearch(selectedYear!, selectedMonth!);
	};
	return (
		<form className={Styles.form} onSubmit={handleSubmit}>
			<div className={Styles.controls}>
				<div className={Styles.control}>
					<label htmlFor="year" />
					<select id="year" ref={yearRef}>
						<option value="2022">2022</option>
						<option value="2023">2023</option>
					</select>
				</div>
				<div className={Styles.control}>
					<label htmlFor="month" />
					<select id="month" ref={monthRef}>
						<option value="1">January</option>
						<option value="2">February</option>
						<option value="3">March</option>
						<option value="4">April</option>
						<option value="5">May</option>
						<option value="6">June</option>
						<option value="7">July</option>
						<option value="8">August</option>
						<option value="9">September</option>
						<option value="10">October</option>
						<option value="11">November</option>
						<option value="12">December</option>
					</select>
				</div>
				<EventLink>Find Events</EventLink>
			</div>
		</form>
	);
};

export default EventSearch;
