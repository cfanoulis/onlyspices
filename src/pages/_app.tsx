import type { AppProps /*, AppContext */ } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../scrollbar.css';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
