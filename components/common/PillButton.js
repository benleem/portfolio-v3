import styles from "../../styles/PillButton.module.css";

const PillButton = ({ text }) => {
	return <button className={styles.pillButton}>{text}</button>;
};

export default PillButton;
