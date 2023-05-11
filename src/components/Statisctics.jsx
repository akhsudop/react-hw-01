import '../css/Statisctics.css';
import PropTypes from 'prop-types';

export const Statisctics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
      {stats.map(el => {
        const bgStyle = {
          backgroundColor:
            '#' + Math.floor(Math.random() * 16777215).toString(16),
        };
        return (
          <li className="item" key={el.id} style={bgStyle}>
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statisctics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
  el: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
