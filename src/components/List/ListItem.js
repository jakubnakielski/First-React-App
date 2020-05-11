import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';

const ListItem = ({ image, title, link, description }) => {
	return (
		<li className={styles.listItem}>

			{image &&
				<img
					src={image || 'https://www.w3schools.com/howto/img_avatar.png'}
					className={styles.image}
					alt={title}
				/>}

			<div>
				<Heading>{title}</Heading>

				<p className={styles.description}>
					{description}
				</p>

				{link &&
					<Button
						href={link}
						className={styles.btn}
					>
						visit twitter page
					</Button>}

			</div>
		</li>
	)
};

ListItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string,
	link: PropTypes.string,
}
ListItem.defaultProps = {
	description: 'One of the React creators!',
}

export default ListItem;