import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import goodIcon from './icons/good-icon.png';
import neutralIcon from './icons/neutral-icon.png';
import badIcon from './icons/bad-icon.png';
import totalIcon from './icons/total-icon.png';
import percentIcon from './icons/percent-icon.png';
function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <ul className={css.statList}>
      <li>
        <p className={css.statText}>
          <img src={goodIcon} alt="Good Icon" className={css.statIcon} />
          <span>{good}</span>
        </p>
      </li>
      <li>
        <p className={css.statText}>
          <img src={neutralIcon} alt="Neutral Icon" className={css.statIcon} />
          <span>{neutral}</span>
        </p>
      </li>
      <li>
        <p className={css.statText}>
          <img src={badIcon} alt="Bad Icon" className={css.statIcon} />
          <span>{bad}</span>
        </p>
      </li>
      <li>
        <p className={css.statText}>
          <img src={totalIcon} alt="Total Icon" className={css.statIcon} />
          Total: <span>{total}</span>
        </p>
      </li>
      <li>
        <p className={css.statText}>
          <img src={percentIcon} alt="Percent Icon" className={css.statIcon} />
          Positive feedback:
          <span>{percentage}</span>
        </p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.string.isRequired,
};

export default Statistics;
