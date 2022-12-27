import PropTypes from 'prop-types';
import getRandomHexColor from './getRandomHexColor.js';
import css from './Statistics.module.css';
// Імпортуємо PropTypes для перевірки, шо типи пропсів компонента валідні.
// Імпортуємо CSS стилі з файлу Statistics.module.css

export const Statistics = ({ title, stats }) => (
   // Cтворюваємо та експортуємо DOM елемент наступної структури, усі ісходні дані дінамічні.
  <div className={css.statisticsContainer}>
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            className={title ? css.statListItem : css.statListItemNoTitle}
            // Пишемо умову, якщо title передався то рендериться клас statListItem, якщо ні - то statListItemNoTitle
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            key={stat.id}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
// Перевірка заданих типів ісходних данних властивість обов'язкова(`.isRequired` )
// Обмеження, що властивість має бути масивом значень певного типу(`.arrayOf` )
// Обмеження, що властивість має бути об'єктом певної форми вказуються імена властивостей об'єкта та їх типи (`.exact` )