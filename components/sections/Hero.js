import { motion } from "framer-motion";

import TitleText from "../common/TitleText";
import SocialList from "../common/SocialList";
import PillButton from "../common/PillButton";
import DescriptionText from "../common/DescriptionText";

import styles from "../../styles/Hero.module.css";

const Hero = () => {
	return (
		<section className={styles.heroContainer}>
			<div className={styles.heroLeft}>
				<p className={styles.positionSmall}>front-end</p>
				<TitleText type="large" text={`Web Developer`} />
				<div className={styles.listContainer}>
					<SocialList />
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
				</div>
			</div>
			<div className={styles.heroRight}>
				<DescriptionText
					text="I'm a front-end web developer, and JAM stack enthusiast. I have a
					passion for all things technology, especially programming. Recently, I
					have been loving the DALL·E 2 tool to create cool art! 🎨🔥🥶"
				/>
				<PillButton text="Contact me" />
			</div>
		</section>
	);
};

export default Hero;
