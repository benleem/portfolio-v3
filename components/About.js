import Image from "next/image";

import styles from "../styles/About.module.css";

const About = () => {
	return (
		<div className={styles.about} id="about">
			<div className={styles.leftColumn}>
				<div className={styles.columnTop}>
					<p className={styles.titleMedium}>Hello. I am Ben</p>
					<p className={styles.name}>Ben Marshall</p>
				</div>
				<p className={styles.descriptionMedium}>
					I specialize in utilizing APIs in the front-end to create a seamless
					user experience. Learning new technologies is my passion, and I'm
					always looking for new ways to improve my toolkit. The technologies I
					utilize the most would be NextJs and React.
				</p>
			</div>
			<div className={styles.rightColumn}>
				<div className={styles.imageWrapper}>
					<Image
						src="/computer.png"
						alt="background"
						layout="responsive"
						height={1024}
						width={1024}
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
