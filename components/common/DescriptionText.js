import styles from "../../styles/DescriptionText.module.css";

const DescriptionText = ({ text }) => {
	return <p className={styles.descriptionText}>{text}</p>;
};

export default DescriptionText;
