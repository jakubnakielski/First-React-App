import React from 'react';
import styles from './Radio.module.scss';

const Radio = ({type, checked, title, ...props} ) => (
    <label className={styles.radio}>
        <input
            id={type}
            className={styles.radioInput}
            type="radio"
            checked={checked === type}
            {...props}
        />
        <div className={styles.radioButton}></div>
        {title}
    </label>
);

export default Radio;