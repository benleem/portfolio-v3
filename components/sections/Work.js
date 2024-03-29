import Image from "next/image";

import TitleText from "../common/TitleText";
import LinkListItem from "../common/LinkListItem";
import DescriptionText from "../common/DescriptionText";

import styles from "../../styles/Work.module.css";

const Work = ({ title, description, image, info, github, site }) => {
	return (
		<div className={styles.work}>
			<div className={styles.rowLeft}>
				<TitleText type="medium" text={title} />
				<DescriptionText text={description} />
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
						{info ? (
							<LinkListItem link={info} text="🛠 Job Info" />
						) : (
							<LinkListItem link={github} text="🐙 GitHub" />
						)}
						<LinkListItem link={site} text="🔴 Live" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Work;
