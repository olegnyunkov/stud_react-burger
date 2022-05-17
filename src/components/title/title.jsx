import React from 'react';
import PropTypes from 'prop-types';

const Title = ({styles, title}) => {
  return (
    <p className={styles}>{title}</p>
  )
}

Title.propTypes = {
  styles: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Title;