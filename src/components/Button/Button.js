import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, href, secondary, ...props }) => {

    const btnClass = secondary ? styles.btnSecondary : styles.btn;

    return (
        href ? (
            <a
                href={href}
                className={btnClass}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ) : (
                <button
                    className={btnClass}
                    {...props}
                >
                    {children}
                </button>
            )
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string,
}

export default Button;