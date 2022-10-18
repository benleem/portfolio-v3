import styles from "../../styles/PillButton.module.css";

const PillButton = ({ text }) => {
	return (
		<a className={styles.pillButton} href="mailto:benmarshall.dev@gmail.com">
			{text}
		</a>
	);
};

export default PillButton;
