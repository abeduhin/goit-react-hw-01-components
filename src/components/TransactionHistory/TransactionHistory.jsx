import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

// Імпортуємо PropTypes для перевірки, шо типи пропсів компонента валідні.
// Імпортуємо CSS стилі з файлу Profile.module.css

export const TransactionHistory = ({ items }) => (
  // Cтворюваємо та експортуємо DOM елемент наступної структури, усі ісходні дані дінамічні.
  <table className={css.transactionHistoryTable}>
    <thead className={css.hederRow}>
      <tr className={css.valuesRow}>
        <th className={css.columnHeader}>Type</th>
        <th className={css.columnHeader}>Amount</th>
        <th className={css.columnHeader}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id} className={css.valuesRow}>
          <td className={css.transactionData}>{item.type}</td>
          <td className={css.transactionData}>{item.amount}</td>
          <td className={css.transactionData}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ).isRequired,
};
// Перевірка заданих типів ісходних данних властивість обов'язкова(Нотація `.isRequired` )
// Масив певного типу (arrayOf)
// Об’єкт із попередженнями про додаткові властивості (exact)