import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import styles from './List.module.scss';

const List = ({ items, type }) => (
    <>
        {items.length ? (
            <ul className={styles.list}>

                {items.map((item) => (
                    <ListItem
                        key={item.title}
                        {...item}
                    />
                ))}

            </ul>
        ) : (
            <h1 className={styles.noItems}>There's nothing here yet. Add your favorite {type}! ❤️</h1>
        )}

    </>
);

List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string.isRequired)
    )
}
export default List;