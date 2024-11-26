import LayoutComponent from "../components/Layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<LayoutComponent>
			<Component {...pageProps} />
		</LayoutComponent>
	);
}

export default MyApp;
