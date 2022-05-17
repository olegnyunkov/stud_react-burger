import React from 'react';
import PropTypes from 'prop-types';

const BurgerImage = ({src, alt, styles}) => {
  return (
    <img src={src} alt={alt} className={styles}/>
  )
}

BurgerImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired
}

export default BurgerImage;