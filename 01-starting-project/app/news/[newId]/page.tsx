import { DUMMY_NEWS } from "news";

const NewDetailsPage = ({ params }) => {
	const { newId } = params;
	const newsItem = DUMMY_NEWS.find((news) => news.slug === newId);

	return (
		<article className="news-article">
			<header>
				<img src={`/images/news/${newsItem.image}`} alt="News" />
				<h1>{newsItem.title}</h1>
				<time dateTime={newsItem.date}>{newsItem.date}</time>
			</header>
			<p>{newsItem.content}</p>
		</article>
	);
};

export default NewDetailsPage;
