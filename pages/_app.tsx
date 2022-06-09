import '../styles/globals.css';
import '../styles/hljs.css';

import Layout from '@components/Layout';
import { ThemeProvider } from '@context/ThemeProvider';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {

	return (
		<ThemeProvider>
			<Head>
				<meta name="keywords" content="Tyangs Blog FrontEnd" />
				<meta name="description" content="美丽新世界" />
				<meta property='og:site_name' content="Tyangs's Blog" />
			</Head>
			{/* <Layout> */}
				<Component {...pageProps} />
			{/* </Layout> */}
		</ThemeProvider>
	);
};

export default MyApp;
