import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../styles/Header.module.css";

const Header = () => {
	const router = useRouter();

	return (
		<header className={styles.header}>
			<div className={styles.contentWrapper}>
				<Link href="/" scroll={true}>
					<a className={styles.name}>Ben Marshall</a>
				</Link>
				<ul className={styles.navList}>
					<li className={styles.navListItem}>
						<Link href="#about" scroll={false}>
							<a
								className={
									router.asPath === "/#about"
										? styles.navLinkActive
										: styles.navLink
								}
							>
								about
							</a>
						</Link>
					</li>
					<li className={styles.navListItem}>
						<Link href="#works" scroll={false}>
							<a
								className={
									router.asPath === "/#works"
										? styles.navLinkActive
										: styles.navLink
								}
							>
								works
							</a>
						</Link>
					</li>
					<li className={styles.navListItem}>
						<Link href="#contact" scroll={false}>
							<a
								className={
									router.asPath === "/#contact"
										? styles.navLinkActive
										: styles.navLink
								}
							>
								contact
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
