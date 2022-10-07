import Work from "./Work";
import styles from "../styles/Works.module.css";
import { v4 as uuidv4 } from "uuid";

const Works = () => {
	const works = [
		{
			title: "Chirp",
			description: "Chirp app",
			image: "/chirp.png",
			alignLeft: false,
		},
		{
			title: "Goggle Earth",
			description: "Goggle earth app",
			image: "/earth.png",
			alignLeft: true,
		},
		{
			title: "Crypto Snapshot",
			description: "Crypto snapshot app",
			image: "/crypto.png",
			alignLeft: false,
		},
	];

	return (
		<div className={styles.works} id="works">
			<p className={styles.worksTitle}>🎨 Selected works</p>
			<div className={styles.worksWrapper}>
				{works.map((work) => (
					<Work
						key={uuidv4()}
						title={work.title}
						description={work.description}
						image={work.image}
						alignLeft={work.alignLeft}
					/>
				))}
			</div>
		</div>
	);
};

export default Works;
