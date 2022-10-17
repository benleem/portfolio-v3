import { v4 as uuidv4 } from "uuid";

import Work from "./Work";
import DescriptionText from "../common/DescriptionText";

import styles from "../../styles/Works.module.css";

const Works = () => {
	const works = [
		{
			title: "Chirp",
			description: "NextJs, ReactJs, CSS Modules, Firebase SDK",
			image: "/chirp.png",
			github: "https://github.com/benleem/chirp",
			site: "https://chirp-social.vercel.app/",
		},
		{
			title: "Goggle Earth",
			description: "ReactJs, CSS",
			image: "/earth.png",
			github: "https://github.com/benleem/threejs-test",
			site: "https://goggle-earth.netlify.app/",
		},
		{
			title: "Crypto Snapshot",
			description: "HTML, JS, CSS",
			image: "/crypto.png",
			github:
				"https://github.com/benleem/crypto_snapshot/tree/main/cryptosnapshot",
			site: "https://cryptosnapshot.netlify.app/",
		},
		{
			title: "Landing Page",
			description: "HTML, JS, CSS",
			image: "/landing.png",
			github: "https://github.com/benleem/landingpage/tree/main/landingofpage",
			site: "https://htmlpreview.github.io/?https://github.com/benleem/landingpage/blob/main/landingofpage/index.html",
		},
	];

	return (
		<section className={styles.works} id="works">
			<DescriptionText text="🎨 Selected works" />
			{works.map((work) => (
				<Work
					key={uuidv4()}
					title={work.title}
					description={work.description}
					image={work.image}
					github={work.github}
					site={work.site}
				/>
			))}
		</section>
	);
};

export default Works;
