/** @format */

import PropTypes from 'prop-types';
import styles from './Rocket.module.css';

const Rocket = (props) => {
  const {
    id, title, desc, flickr,
  } = props;

  const reserveHandle = (id) => {
    console.log(id);
  };

  return (
    <div className={styles.rocket}>
      <div>
        <img src={flickr} alt="space rocket" />
      </div>
      <div className="rocket-description">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div>
        <button type="button" onClick={() => reserveHandle(id)}>
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

Rocket.defaultProps = {
  title: '',
  desc: '',
  flickr: '',
  id: 0,
};

Rocket.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  flickr: PropTypes.string,
  id: PropTypes.number,
};
export default Rocket;
