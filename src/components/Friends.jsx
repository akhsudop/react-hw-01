import clsx from 'clsx';
import PropTypes from 'prop-types';

import css from '../css/Friends.module.css';

// THIS COMP HAS MODULE CSS IMPLEMENTATION

export const Friends = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => {
      return (
        <li className={css.item} key={id}>
          <span className={clsx(css.status, isOnline && css.online)}></span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      );
    })}
  </ul>
);

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string,
};
