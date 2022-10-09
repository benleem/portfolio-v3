import Head from "next/head";

import Hero from "../components/Hero";
import About from "../components/About";
import Works from "../components/Works";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ben Marshall</title>
				<meta
					name="description"
					content="Ben Marshall's portfolio, made with ❤️"
				/>
			</Head>
			<Hero />
			<About />
			<Works />
		</>
	);
}
