import Hero from "./Hero";
import About from "./About";
import Works from "./Works";

import styles from "../styles/ContentContainer.module.css";

const ContentContainer = () => {
	return (
		<section className={styles.mainContent}>
			<Hero />
			<About />
			<Works />
		</section>
	);
};

export default ContentContainer;
