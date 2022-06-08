import '../styles/globals.css';
import '../styles/hljs.css';

import Layout from '@components/Layout';
import { ThemeProvider } from '@context/ThemeProvider';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {

	return (
		<ThemeProvider>
			{/* <Layout> */}
				<Component {...pageProps} />
			{/* </Layout> */}
		</ThemeProvider>
	);
};

export default MyApp;
