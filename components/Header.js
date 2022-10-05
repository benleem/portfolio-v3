import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
	const router = useRouter();

	return (
		<header className={styles.header}>
			<div className={styles.contentWrapper}>
				<div className={styles.leftColumn}>
					<Link href="/">
						<a>Ben Marshall</a>
					</Link>
				</div>
				<div className={styles.rightColumn}>
					<ul className={styles.navList}>
						<li className={styles.navListItem}>
							<Link href="#about">
								<a
									className={
										router.asPath === "/#about"
											? styles.navLinkActive
											: styles.navLink
									}
								>
									About
								</a>
							</Link>
						</li>
						<li className={styles.navListItem}>
							<Link href="#works">
								<a
									className={
										router.asPath === "/#works"
											? styles.navLinkActive
											: styles.navLink
									}
								>
									Works
								</a>
							</Link>
						</li>
						<li className={styles.navListItem}>
							<Link href="#contact">
								<a
									className={
										router.asPath === "/#contact"
											? styles.navLinkActive
											: styles.navLink
									}
								>
									Contact
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
