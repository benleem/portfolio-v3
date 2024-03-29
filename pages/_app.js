import { Suspense } from "react";

import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Background from "../components/Background";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	console.log("Hello");
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<Background />
			<Header />
			<main>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	);
}

export default MyApp;
