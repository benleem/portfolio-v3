import { motion } from "framer-motion";

import TitleText from "../common/TitleText";
import LinkListItem from "../common/LinkListItem";
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
					<ul className={styles.socialList}>
						<LinkListItem link="https://github.com/benleem" text="🐙 GitHub" />
						<LinkListItem
							link="https://github.com/benleem"
							text="🔗 LinkedIn"
						/>
						<LinkListItem link="https://github.com/benleem" text="✉️ Email" />
					</ul>

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
				<div className={styles.widthWrapper}>
					<DescriptionText
						text="I'm a front-end web developer, and JAM stack enthusiast. I have a
					passion for all things technology, especially programming. Recently, I
					have been loving the DALL·E 2 tool to create cool art! 🎨🔥🥶"
					/>
					<PillButton text="Contact me" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
