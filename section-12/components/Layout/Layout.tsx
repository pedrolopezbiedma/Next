import Header from "./Header";

interface LayoutProps {
	children: React.ReactNode;
}

const LayoutComponent = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default LayoutComponent;
