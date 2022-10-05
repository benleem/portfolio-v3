import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Header from "../components/Header";

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
				<section className={styles.backgroundWrapper}>
					<Image
						className={styles.background}
						src="/background.png"
						alt="background"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</section>
				<section className={styles.mainContent}>
					<div className={styles.heroContainer}>
						<div className={styles.heroLeft}>
							<p className={styles.positionSmall}>front-end</p>
							<p className={styles.positionLarge}>Web/Mobile</p>
							<p className={styles.positionLarge}>Developer</p>
							<ul className={styles.socialList}>
								<li className={styles.socialListItem}>
									<Link href="https://github.com/benleem">
										<a className={styles.socialLink} target="_blank">
											GitHub
										</a>
									</Link>
								</li>
								<li className={styles.socialListItem}>
									<Link href="https://www.linkedin.com/in/benjamin-marshall-609906196">
										<a className={styles.socialLink} target="_blank">
											LinkedIn
										</a>
									</Link>
								</li>
								<li className={styles.socialListItem}>
									<Link href="#works">
										<a className={styles.socialLink} target="_blank">
											Email
										</a>
									</Link>
								</li>
								<li className={styles.socialListItem}>
									<motion.p
										className={styles.bouncingArrow}
										initial={{ x: [0] }}
										animate={{ x: [100, 0, 100] }}
										transition={{
											duration: 2,
											repeat: Infinity,
										}}
									>
										{"<----"}
									</motion.p>
								</li>
							</ul>
						</div>
						<div className={styles.heroRight}>
							<p className={styles.descriptionMedium}>
								Donec ac scelerisque leo. Vestibulum in faucibus diam. Nunc sit
								amet venenatis dolor. Praesent pharetra mi quis blandit pretium.
								Morbi venenatis in tellus at finibus. Integer at nunc ac felis
								ullamcorper efficitur.
							</p>
							<button className={styles.pillButton}>Contact Me</button>
						</div>
					</div>
					<div className={styles.about}>
						<p>
							hello this is the about section lmaoa asd asdasdadasd dasdadasdasd
							asdas Donec ac scelerisque leo. Vestibulum in faucibus diam. Nunc
							sit amet venenatis dolor. Praesent pharetra mi quis blandit
							pretium. Morbi venenatis in tellus at finibus. Integer at nunc ac
							felis ullamcorper efficitur.Donec ac scelerisque leo. Vestibulum
							in faucibus diam. Nunc sit amet venenatis dolor. Praesent pharetra
							mi quis blandit pretium. Morbi venenatis in tellus at finibus.
							Integer at nunc ac felis ullamcorper efficitur.Donec ac
							scelerisque leo. Vestibulum in faucibus diam. Nunc sit amet
							venenatis dolor. Praesent pharetra mi quis blandit pretium. Morbi
							venenatis in tellus at finibus. Integer at nunc ac felis
							ullamcorper efficitur.Donec ac scelerisque leo. Vestibulum in
							faucibus diam. Nunc sit amet venenatis dolor. Praesent pharetra mi
							quis blandit pretium. Morbi venenatis in tellus at finibus.
							Integer at nunc ac felis ullamcorper efficitur.Donec ac
							scelerisque leo. Vestibulum in faucibus diam. Nunc sit amet
							venenatis dolor. Praesent pharetra mi quis blandit pretium. Morbi
							venenatis in tellus at finibus. Integer at nunc ac felis
							ullamcorper efficitur.Donec ac scelerisque leo. Vestibulum in
							faucibus diam. Nunc sit amet venenatis dolor. Praesent pharetra mi
							quis blandit pretium. Morbi venenatis in tellus at finibus.
							Integer at nunc ac felis ullamcorper efficitur.Donec ac
							scelerisque leo. Vestibulum in faucibus diam. Nunc sit amet
							venenatis dolor. Praesent pharetra mi quis blandit pretium. Morbi
							venenatis in tellus at finibus. Integer at nunc ac felis
							ullamcorper efficitur.Donec ac scelerisque leo. Vestibulum in
							faucibus diam. Nunc sit amet venenatis dolor. Praesent pharetra mi
							quis blandit pretium. Morbi venenatis in tellus at finibus.
							Integer at nunc ac felis ullamcorper efficitur.Donec ac
							scelerisque leo. Vestibulum in faucibus diam. Nunc sit amet
							venenatis dolor. Praesent pharetra mi quis blandit pretium. Morbi
							venenatis in tellus at finibus. Integer at nunc ac felis
							ullamcorper efficitur.Donec ac scelerisque leo. Vestibulum in
							faucibus diam. Nunc sit amet venenatis dolor. Praesent pharetra mi
							quis blandit pretium. Morbi venenatis in tellus at finibus.
							Integer at nunc ac felis ullamcorper efficitur.Donec ac
							scelerisque leo. Vestibulum in faucibus diam. Nunc sit amet
							venenatis dolor. Praesent pharetra mi quis blandit pretium. Morbi
							venenatis in tellus at finibus. Integer at nunc ac felis
							ullamcorper efficitur.Donec ac scelerisque leo. Vestibulum in
							faucibus diam. Nunc sit amet venenatis dolor. Praesent pharetra mi
							quis blandit pretium. Morbi venenatis in tellus at finibus.
							Integer at nunc ac felis ullamcorper efficitur.
						</p>
					</div>
				</section>
			</main>
		</>
	);
}
