import Link from "next/link";
import { motion } from "framer-motion";

import styles from "../styles/Hero.module.css";

const Hero = () => {
	return (
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
							{"<-----"}
						</motion.p>
					</li>
				</ul>
			</div>
			<div className={styles.heroRight}>
				<p
					className={styles.descriptionMedium}
					style={{ maxWidth: "600px", textAlign: "end" }}
				>
					I'm a front-end web developer, and JAM stack enthusiast. I have a
					passion for all things technology, especially programming. Recently, I
					have been loving the DALL·E 2 tool to create cool art! 🎨🔥🥶
				</p>
				<button className={styles.pillButton}>Contact Me</button>
			</div>
		</div>
	);
};

export default Hero;
