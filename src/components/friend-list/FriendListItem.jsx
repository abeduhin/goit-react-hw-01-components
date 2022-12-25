import PropTypes from 'prop-types';
import css from './Friend.module.css';

export const FriendListItem = ({ isOnline, avatar, name }) => (

  <li className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="70" />
        <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
// Перевірка заданих типів ісходних данних властивість обов'язкова(`.isRequired` )

