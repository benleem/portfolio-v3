import Image from "next/image";

import styles from "../../styles/Work.module.css";

const Work = ({ title, description, image, alignLeft }) => {
	return (
		<div className={alignLeft === true ? styles.workAligned : styles.work}>
			<div className={styles.rowLeft}>
				<p className={styles.workTitle}>{title}</p>
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
			</div>
		</div>
	);
};

export default Work;
