import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './Friend.module.css'
// Імпортуємо PropTypes для перевірки, шо типи пропсів компонента валідні.
// Імпортуємо DOM елемент з файлу FriendListItem
// Імпортуємо CSS стилі з файлу Friend.module.css


export const FriendList = ({ friends }) => (
 // Cтворюваємо та експортуємо DOM елемент наступної структури, усі ісходні дані дінамічні + дані з  FriendListItem
  <ul className={css.friendList}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
        name={friend.name}
      ></FriendListItem>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
// Перевірка заданих типів ісходних данних властивість обов'язкова(`.isRequired` )
// Обмеження, що властивість має бути масивом значень певного типу(`.arrayOf` )
// Обмеження, що властивість має бути об'єктом певної форми вказуються імена властивостей об'єкта та їх типи (`.shape` )