import Image from "next/image";

import styles from "../styles/Background.module.css";

const Background = () => {
	return (
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
	);
};

export default Background;
