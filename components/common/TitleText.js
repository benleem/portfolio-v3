import styles from "../../styles/TitleText.module.css";

const TitleText = ({ type, text }) => {
	switch (type) {
		case "medium":
			return <p className={styles.titleMedium}>{text}</p>;
		case "large":
			return <p className={styles.titleLarge}>{text}</p>;
		default:
			break;
	}
};

export default TitleText;
