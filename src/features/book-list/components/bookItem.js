import React from 'react';
import PropTypes from 'prop-types';

function BookItem(props) {
  const {title} = props.book;

  return (
    <li
      className="list-group-item"
      onClick={() => props.onSelectBook(props.book)}
    >
      {title}
    </li>
  );
}

BookItem.propTypes = {

};

export default BookItem;
