import { useEffect } from "react";

const LastSalesPage = () => {
	useEffect(() => {
		fetch("https://nextjs-course-cb287-default-rtdb.firebaseio.com/sales.json")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	}, []);

	return <h1>Last Sales Page</h1>;
};

export default LastSalesPage;
