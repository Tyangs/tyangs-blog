import BlogPreview from '@components/BlogPreview';
import Header from '@components/Header';
import Layout from '@components/Layout';
import { getAllBlogs, IBlogInfo } from '@utils/getBlog';

interface IHomeProps {
	blogInfos: IBlogInfo[];
}

const Home = (props: IHomeProps) => {
	const { blogInfos } = props;

	return (
		<Layout>
			<Header />
			{blogInfos.map(blogInfo => (
				<BlogPreview key={blogInfo.slug} {...blogInfo} />
			))}
		</Layout>
	);
};

export default Home;

export async function getStaticProps() {
	const blogInfos = getAllBlogs();

	return {
		props: { blogInfos },
	};
}
