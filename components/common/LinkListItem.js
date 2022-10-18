import Link from "next/link";

import styles from "../../styles/LinkListItem.module.css";

const LinkListItem = ({ link, text, disableLink }) => {
	const copyText = async (text) => {
		await navigator.clipboard.writeText(text);
		alert(`Email copied to clipboard: ${text}`);
	};

	return (
		<li className={styles.socialListItem}>
			{disableLink ? (
				<a
					className={styles.socialLink}
					target="_blank"
					onClick={() => copyText("benmarshall.dev@gmail.com")}
				>
					{text}
				</a>
			) : (
				<Link href={link}>
					<a className={styles.socialLink} target="_blank">
						{text}
					</a>
				</Link>
			)}
		</li>
	);
};

export default LinkListItem;
