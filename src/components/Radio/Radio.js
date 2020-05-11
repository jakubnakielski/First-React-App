import React from 'react';
import styles from './Radio.module.scss';

const Radio = ({type, checked, title, ...props} ) => (
    <label className={styles.label}>
        <input
            id={type}
            className={styles.radioBtn}
            type="radio"
            checked={checked === type}
            {...props}
        />{title}
    </label>
);

export default Radio;