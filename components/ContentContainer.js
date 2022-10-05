import Hero from "./Hero";
import About from "./About";

import styles from "../styles/ContentContainer.module.css";

const ContentContainer = () => {
	return (
		<section className={styles.mainContent}>
			<Hero />
			<About />
		</section>
	);
};

export default ContentContainer;
