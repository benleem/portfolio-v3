import Image from "next/image";

import TitleText from "../common/TitleText";
import LinkListItem from "../common/LinkListItem";

import styles from "../../styles/Work.module.css";

const Work = ({ title, description, image, github, site, alignLeft }) => {
	return (
		<div className={alignLeft === true ? styles.workAligned : styles.work}>
			<div className={styles.rowLeft}>
				<TitleText type="medium" text={title} />
				<p className={styles.workDescription}>{description}</p>
			</div>
			<div className={styles.rowRight}>
				<div className={styles.imageWrapper}>
					<Image
						className={styles.workImage}
						src={image}
						alt={title}
						layout="responsive"
						width={1920}
						height={1080}
					/>
				</div>
				<div className={styles.linksWrapper}>
					<ul className={styles.linksList}>
						<LinkListItem link={github} text="🐙 GitHub" />
						<LinkListItem link={site} text="🔴 Live" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Work;
