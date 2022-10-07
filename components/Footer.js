import Image from "next/image";

import SocialList from "./SocialList";

import styles from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer} id="contact">
			<div className={styles.footerLeft}>
				<p className={styles.connect}>Let's</p>
				<p className={styles.connect}>Connect</p>
			</div>
			<div className={styles.footerRight}>
				<div className={styles.rightTop}>
					<div className={styles.contactMe}>
						<p className={styles.query}>Need a web developer?</p>
						<button className={styles.contact}>Contact me</button>
					</div>
					<div className={styles.imageWrapper}>
						<Image
							src="https://media.giphy.com/media/5ndklThG9vUUdTmgMn/giphy.gif"
							alt="Web Dev"
							layout="responsive"
							width={250}
							height={400}
						/>
					</div>
				</div>
				<div className={styles.rightBottom}>
					<SocialList />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
