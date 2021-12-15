import '../assets/sass/reset.sass'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,500;0,600;1,300;1,400&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="smartphone">
				<Component {...pageProps} />
			</div>
		</>
	)
}

export default MyApp
