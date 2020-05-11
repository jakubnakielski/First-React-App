import React from 'react';
import Button from '../Button/Button';
import HeaderNavigation from './Navigation';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/logo.svg';

const Header = ({ openModalFn }) => (
    <header className={styles.header}>
        <img className={styles.favNoteLogo} src={logoImage} alt="FavNote" />
        <HeaderNavigation />
        <Button onClick={openModalFn} secondary>new item</Button>
    </header>
);

export default Header;