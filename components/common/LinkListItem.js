import Link from "next/link";

import styles from "../../styles/LinkListItem.module.css";

const LinkListItem = ({ link, text }) => {
	return (
		<li className={styles.socialListItem}>
			<Link href={link}>
				<a className={styles.socialLink} target="_blank">
					{text}
				</a>
			</Link>
		</li>
	);
};

export default LinkListItem;
