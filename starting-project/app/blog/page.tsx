import Link from "next/link";

const Blog = () => {
	return (
		<main>
			<h1>The Blog</h1>
			<p>
				<Link href={`blog/${1}`}>Blog 1</Link>
			</p>
			<p>
				<Link href={`blog/${2}`}>Blog 2</Link>
			</p>
		</main>
	);
};

export default Blog;
