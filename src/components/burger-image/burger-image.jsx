import React from 'react';
import PropTypes from 'prop-types';

const BurgerImage = (props) => {
  return (
    <img src={props.src} alt={props.alt} className={props.styles}/>
  )
}

BurgerImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired
}

export default BurgerImage;