import React from 'react';
import PropTypes from 'prop-types';

function BookItem(props) {debugger
  const {title} = props.book;

  return (
    <li className="list-group-item">{title}</li>
  );
}

BookItem.propTypes = {

};

export default BookItem;
