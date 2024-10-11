const Post = (params: { postId: string }) => {
	const { postId } = params;
	return (
		<main>
			<h1>Post {postId}</h1>
		</main>
	);
};

export default Post;
