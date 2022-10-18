import Image from "next/image";

import TitleText from "./common/TitleText";
import LinkListItem from "./common/LinkListItem";
import DescriptionText from "./common/DescriptionText";
import PillButton from "./common/PillButton";

import styles from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer} id="contact">
			<div className={styles.footerLeft}>
				<TitleText type="large" text="Let's connect" />
			</div>
			<div className={styles.footerRight}>
				<div className={styles.rightTop}>
					<div className={styles.contactMe}>
						<DescriptionText text="Need a web developer?" />
						<PillButton text="Contact me" />
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
					<ul className={styles.socialList}>
						<LinkListItem link="https://github.com/benleem" text="🐙 GitHub" />
						<LinkListItem
							link="https://www.linkedin.com/in/benjamin-marshall-609906196/"
							text="🔗 LinkedIn"
						/>
						<LinkListItem text="✉️ Email" disableLink={true} />
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
