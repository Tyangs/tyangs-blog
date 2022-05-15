import type { AppProps } from 'next/app';
import {useState, useEffect} from 'react'
import Layout from '@components/Layout';
import { ThemeProvider } from '@context/ThemeProvider';

import '../styles/globals.css';
import '../styles/hljs.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [isSSR, setIsSSR] = useState<boolean>(true)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setIsSSR(false)
		}
	}, [])

	if (isSSR) return null;

	return (
		<ThemeProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
};

export default MyApp;
