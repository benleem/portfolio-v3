import CanvasWrapper from "../threejs/Canvas";

import styles from "../../styles/About.module.css";

const About = () => {
	return (
		<section className={styles.about} id="about">
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
				<CanvasWrapper />
			</div>
		</section>
	);
};

export default About;
