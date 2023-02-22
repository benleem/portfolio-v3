import { v4 as uuidv4 } from "uuid";

import Work from "./Work";
import DescriptionText from "../common/DescriptionText";

import styles from "../../styles/Works.module.css";

const Works = () => {
	const works = [
		{
			title: "Love Together",
			description: "Front End Developer",
			image: "/love-together.png",
			info: "https://www.linkedin.com/in/benjamin-marshall-609906196/",
			site: "https://www.love-together.com/",
		},
		{
			title: "Chirp",
			description: "NextJs, React, CSS Modules, Firebase SDK",
			image: "/chirp.png",
			github: "https://github.com/benleem/chirp",
			site: "https://chirp-social.vercel.app/",
		},
		{
			title: "Goggle Earth",
			description: "React, CSS",
			image: "/earth.png",
			github: "https://github.com/benleem/threejs-test",
			site: "https://goggle-earth.netlify.app/",
		},
		{
			title: "Crypto Snapshot",
			description: "HTML, JS, CSS",
			image: "/crypto.png",
			github: "https://github.com/benleem/crypto_snapshot",
			site: "https://cryptosnapshot.netlify.app/",
		},
		{
			title: "Landing Page",
			description: "HTML, JS, CSS",
			image: "/landing.png",
			github: "https://github.com/benleem/landingpage",
			site: "https://htmlpreview.github.io/?https://github.com/benleem/landingpage/blob/main/index.html",
		},
	];

	return (
		<section className={styles.works} id="works">
			<DescriptionText text="🛠 Experience / 🎨 Selected works" bold={true} />
			{works.map((work) => (
				<Work
					key={uuidv4()}
					title={work.title}
					description={work.description}
					image={work.image}
					info={work.info}
					github={work.github}
					site={work.site}
				/>
			))}
		</section>
	);
};

export default Works;
