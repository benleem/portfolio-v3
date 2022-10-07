import Link from "next/link";

import styles from "../styles/SocialList.module.css";

const SocialList = () => {
	return (
		<ul className={styles.socialList}>
			<li className={styles.socialListItem}>
				<Link href="https://github.com/benleem">
					<a className={styles.socialLink} target="_blank">
						🐙 GitHub
					</a>
				</Link>
			</li>
			<li className={styles.socialListItem}>
				<Link href="https://www.linkedin.com/in/benjamin-marshall-609906196">
					<a className={styles.socialLink} target="_blank">
						🔗 LinkedIn
					</a>
				</Link>
			</li>
			<li className={styles.socialListItem}>
				<Link href="#works">
					<a className={styles.socialLink} target="_blank">
						✉️ Email
					</a>
				</Link>
			</li>
		</ul>
	);
};

export default SocialList;
