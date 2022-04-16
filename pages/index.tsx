import { getAllBlogs, BlogInfo } from '@utils/getPost';
import Header from '@components/Header';
import BlogPreview from '@components/BlogPreview';

interface IHomeProps {
	blogInfos: BlogInfo[];
}

const Home = (props: IHomeProps) => {
	const { blogInfos } = props;

	return (
		<div>
			<Header />
			{blogInfos.map(blogInfo => (
				<BlogPreview key={blogInfo.slug} {...blogInfo} />
			))}
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	const blogInfos = getAllBlogs();

	return {
		props: { blogInfos },
	};
}