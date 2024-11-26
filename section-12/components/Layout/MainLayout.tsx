import Header from "./Header";

interface LayoutProps {
	children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default MainLayout;
