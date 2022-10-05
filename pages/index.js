import Head from "next/head";

import Header from "../components/Header";
import Background from "../components/Background";
import ContentContainer from "../components/ContentContainer";

import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ben Marshall</title>
				<meta
					name="description"
					content="Ben Marshall's portfolio, made with ❤️"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.container}>
				<Header />
				<Background />
				<ContentContainer />
			</main>
		</>
	);
}
