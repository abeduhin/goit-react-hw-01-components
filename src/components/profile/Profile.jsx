import PropTypes from 'prop-types';
import css from './Profile.module.css';


// Імпортуємо PropTypes для перевірки, шо типи пропсів компонента валідні.
// Імпортуємо CSS стилі з файлу Profile.module.css

export const Profile = ({ avatar, username, tag, location, stats }) => (

  // Cтворюваємо DOM елемент наступної структури, усі ісходні дані дінамічні.

  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.profileName}>{username}</p>
      <p className={css.profileTag}>@{tag}</p>
      <p className={css.profileLocation}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.followersList}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.viewsList}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.likesList}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

// Перевірка заданих типів ісходних данних властивість обов'язкова(Нотація `.isRequired` )