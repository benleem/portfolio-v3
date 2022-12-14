import CanvasWrapper from "../threejs/Canvas";
import TitleText from "../common/TitleText";
import DescriptionText from "../common/DescriptionText";

import styles from "../../styles/About.module.css";

const About = () => {
	return (
		<section className={styles.about} id="about">
			<div className={styles.leftColumn}>
				<div className={styles.columnTop}>
					<TitleText type="medium" text="Hello. I am Ben" />
					<p className={styles.name}>Ben Marshall</p>
				</div>
				<DescriptionText
					text="I specialize in utilizing APIs in the front-end to create a seamless
					user experience. Learning new technologies is my passion, and I'm
					always looking for new ways to improve my toolkit. The technologies I
					utilize the most would be NextJs and React."
				/>
			</div>
			<div className={styles.rightColumn}>
				<CanvasWrapper />
			</div>
		</section>
	);
};

export default About;
