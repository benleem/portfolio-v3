import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";

import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ben Marshall - Home</title>
				<meta
					name="description"
					content="Ben Marshall's portfolio, made with ❤️"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.container}>
				<Header />
				<div className={styles.backgroundWrapper}>
					<Image
						className={styles.background}
						src="/background.png"
						alt="background"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>
				<p className={styles.hello}>Hello</p>
			</div>
		</>
	);
}
