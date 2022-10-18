import styles from "../../styles/DescriptionText.module.css";

const DescriptionText = ({ text, bold }) => {
	return (
		<p
			className={
				bold ? `${styles.descriptionText} bold_500` : styles.descriptionText
			}
		>
			{text}
		</p>
	);
};

export default DescriptionText;
