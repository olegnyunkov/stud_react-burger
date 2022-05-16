import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
    return (
      <p className={props.styles}>{props.title}</p>
    )
  }

  Title.propTypes = {
    styles: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

export default Title;