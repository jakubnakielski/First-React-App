import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ name, placeholder, maxLength, isRequired, tag: Tag, ...props }) => (
	<Tag
		className={Tag === 'textarea' ? styles.textarea : styles.input}
		type="text"
		placeholder={placeholder}
		name={name}
		id={name}
		maxLength={maxLength}
		required={isRequired}
		{...props}
	/>
)

Input.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	maxLength: PropTypes.number,
	tag: PropTypes.string,
	isRequired: PropTypes.bool,
}

Input.defaultProps = {
	isRequired: true,
	tag: 'input',
	maxLength: 200,
}

export default Input;