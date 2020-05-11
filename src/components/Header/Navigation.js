import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const HeaderNavigation = () => (
    <nav className={styles.nav}>
        <ul className={styles.listWrapper}>
            <li className={styles.navItem}>
                <NavLink
                    exact
                    className={styles.navLink}
                    to="/"
                    activeClassName={styles.navLinkActive}>
                    twitters
                </NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink
                    className={styles.navLink}
                    to="/articles"
                    activeClassName={styles.navLinkActive}>
                    articles
                </NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink
                    className={styles.navLink}
                    to="/notes"
                    activeClassName={styles.navLinkActive}>
                    notes
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default HeaderNavigation;
