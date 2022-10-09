import { v4 as uuidv4 } from "uuid";

import Work from "./Work";
import DescriptionText from "../common/DescriptionText";

import styles from "../../styles/Works.module.css";

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
		<section className={styles.works} id="works">
			<DescriptionText text="🎨 Selected works" />
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
		</section>
	);
};

export default Works;
