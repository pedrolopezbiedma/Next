import Styles from "./FallbackLoading.module.css";

const FallbackLoading = ({ children }) => {
	return <p className={Styles.loading}>{children}</p>;
};

export default FallbackLoading;
