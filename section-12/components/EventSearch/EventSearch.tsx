import EventLink from "../EventList/EventLink";
import Styles from "./EventSearch.module.css";

const EventSearch = () => {
	return (
		<form className={Styles.form}>
			<div className={Styles.controls}>
				<div className={Styles.control}>
					<label htmlFor="year" />
					<select id="year">
						<option value="2022">2022</option>
						<option value="2023">2023</option>
					</select>
				</div>
				<div className={Styles.control}>
					<label htmlFor="month" />
					<select id="month">
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
