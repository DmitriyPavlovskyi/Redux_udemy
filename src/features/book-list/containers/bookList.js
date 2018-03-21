import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookItem from '../components/bookItem';

class BookList extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

  renderList() {
    return this.props.books.map((book) => {
      return (
        <BookItem book={book} key={book.title}/>
      )
    });
  };
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
